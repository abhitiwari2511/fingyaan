import asyncHandler from "../utils/asyncHandler";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { env } from "process";
import { withAccelerate } from '@prisma/extension-accelerate';
import { User } from "../types";
import { generateAccessToken, generateRefreshToken, hashedPass, isPasswordCorrect } from "../utils/tokens";

const generateAccessAndRefreshToken = async ({ id } : User) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl: env.DATABASE_URL
        }).$extends(withAccelerate());
        
        const user = await prisma.user.findUnique({
            where: {
                id: id
            }
        });
        
        if (!user) {
            throw new Error("User not found");
        }
        
        const accessToken = await generateAccessToken(user);
        const refreshToken = await generateRefreshToken(user);

        await prisma.user.update({
            where: {
                id: id
            },
            data: {
                refreshToken: refreshToken
            }
        })
        return {accessToken, refreshToken}

    } catch (error) {
        throw new Error("Something went wrong while creating user")
    }
}

const registerUser = asyncHandler(async (req, res) => {
    // get user details from FE
    // validation of user - not empty, email, password
    // check if user exists or not - username, email
    // hash password
    // check for images and avatar
    // upload to cloudinary
    // create user object - create user entry in db
    // remove password and refresh token from response
    // check if respose of user creation is success or not
    // return response

    const { fullName, email, password } = req.body;

    const prisma = new PrismaClient({
        datasourceUrl: env.DATABASE_URL,
      }).$extends(withAccelerate());

    if ([fullName, email, password].some((item,index) => item?.trim() === "")) {
        throw new Error("Full name is required");
    }

    const existedUser = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    if (existedUser) {
        return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await hashedPass(password);

    const user = await prisma.user.create({
        data: {
            email : email,
            fullName : fullName,
            password : hashedPassword
        }
    })

    const createdUser = await prisma.user.findUnique({
        where: {
            id: user.id
        },
        select: {
            id: true,
            email: true,
            fullName: true
        }
    });

    const {accessToken, refreshToken} = await generateAccessAndRefreshToken(user);
    if (!createdUser) {
        // throw new Error("User creation failed");
        return res.status(500).json({ message: "User creation failed while registering" });
    }

    const options = {
        httpOnly: true,
        secure: true,
        sameSite: 'none' as const,
        path: '/'
    }

    return res.status(201)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json({
        user: createdUser, 
        accessToken, 
        refreshToken,
        message: "User registered Successfully"
    });
})

const loginUser = asyncHandler(async (req, res) => {
    // get user details from FE
    // validation of user - not empty, email, password
    // checking if already exists then login
    // get data from body
    // password check
    // generate token access and refresh token and send to user
    // send tokens in cookies form securely
    
    const {email, password} = req.body;
    if (!email) {
        throw new Error("Email is required");
    }

    const prisma = new PrismaClient({
        datasourceUrl: env.DATABASE_URL,
      }).$extends(withAccelerate());

    const user = await prisma.user.findUnique({
        
        // normal way of finding on
        // email: email,
        // userName: userName
        where: {
            email: email
        }
    })
    // console.log(user);

    if (!user) {
        return res.status(404).json({
            message : "User not found"
        })
    }

    const passValid = await isPasswordCorrect({
        password: password,
        hashedPass: user.password
    });
    if (!passValid) {
        return res.status(401).json({
            message : "Password not correct"
        })
    }

    const {accessToken, refreshToken} = await generateAccessAndRefreshToken(user);
    const loggedInUser = await prisma.user.findUnique({
        where: {
            id: user.id
        },
        select: {
            id: true,
            email: true,
            fullName: true,
        }
    })
    console.log(loggedInUser);
    

    // for cookies with these only server can modify
    const options = {
        httpOnly: true,
        secure: true,
        sameSite: 'none' as const,
        path: '/'
    }

    return res.status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json({
        user: loggedInUser, accessToken, refreshToken,
        message: "User loggedIn Successfully"
    })
})

const logoutUser = asyncHandler(async (req, res) => {
    // clear cookies
    // reset access and refresh token
    const prisma = new PrismaClient({
        datasourceUrl: env.DATABASE_URL,
    }).$extends(withAccelerate());
    
    if (!(req as any).user?.id) {
        return res.status(401).json({
            message: "Unauthorized request or already logged out"
        });
    }

    await prisma.user.update({
        where: {
            id: (req as any).user?.id
        },
        data: {
            refreshToken: null
        }
    })

    const options = {
        httpOnly: true,
        secure: true
    }

    return res.status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json({
        message: "User logged out successfully"
    })
})

const refreshAccessToken = asyncHandler(async (req, res) => {
    const incomingToken = req.cookies.refreshToken || req.body.refreshToken;

    if (!incomingToken) {
        return res.status(401).json({
            message: "Unauthorized Request"
        })
    }

    try {
        const matchedToken = process.env.REFRESH_TOKEN_SECRET;
        if (!matchedToken) {
            return res.status(500).json({
                message: "Server configuration error: JWT_SECRET not found"
            })
        }
        const decodedToken = jwt.verify(incomingToken, matchedToken) as { id: User["id"] };
    
        const prisma = new PrismaClient({
            datasourceUrl: env.DATABASE_URL,
          }).$extends(withAccelerate());

        const user = await prisma.user.findUnique({
            where: {
                id: decodedToken.id
            }
        })
        if (!user) {
            return res.status(401).json({
                message: "Invalid Refresh Token"
            })
        }
    
        if (incomingToken !== user?.refreshToken) {
            return res.status(401).json({
                message: "Refresh Token is Expired"
            })
        }
    
        const option = {
            httpOnly: true,
            secure: true
        }
    
        const newToken = await generateAccessAndRefreshToken(user);
    
        return res.status(200)
        .cookie("accessToken", newToken.accessToken, option)
        .cookie("refreshToken", newToken.refreshToken, option)
        .json("Access Token Refreshed Successfully")
    } catch (error) {
        return res.status(500).json({
            message: "Server Error"
        })       
    }
})

export { registerUser, loginUser, logoutUser, refreshAccessToken }
