import { PrismaClient } from "@prisma/client";
import asyncHandler from "../utils/asyncHandler";
import jwt from "jsonwebtoken";
import { withAccelerate } from "@prisma/extension-accelerate";

export const verifyJWT = asyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
    
        if (!token) {
            return res.status(401).json({
                message: "Unauthorized Request"
            })
        }
    
        const jwtSecret = process.env.JWT_SECRET;
        if (!jwtSecret) {
            return res.status(500).json({ message: "Server configuration error: JWT_SECRET not found" })
        }
        
        const decodedToken = jwt.verify(token, jwtSecret) as { id: string };

        const prisma = new PrismaClient({
            datasourceUrl: process.env.DATABASE_URL    
        }).$extends(withAccelerate())

        const user = await prisma.user.findUnique({
            where: { id: decodedToken.id },
            select: {
                id: true,
                email: true,
                fullName: true,
            }
        })
    
        if (!user) { 
            return res.status(401).json("Invalid Access Token")
        }
    
        (req as any).user = user;
        next();
    } catch (error) {
        console.error('Error in verifyJWT:', error);
        res.status(500).json({ message: "Server Error" })
    }
})