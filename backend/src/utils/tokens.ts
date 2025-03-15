import bcrypt from 'bcryptjs';
import { passwordType, User } from '../types';
import jwt from "jsonwebtoken"

export const hashedPass = async(password : passwordType) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password.toString(), salt);
}

export const isPasswordCorrect = async ({ password, hashedPass }: passwordType) => {
    return await bcrypt.compare(password.toString(), hashedPass)
}

export const generateAccessToken = async ({id, email, fullName}: User): Promise<string> => {
    const jwtSecret = process.env.JWT_SECRET;
    // console.log('JWT Secret:', jwtSecret);
    if (!jwtSecret) {
        throw new Error("JWT_SECRET is not defined");
    }
    
    const jwtExpiry = process.env.JWT_EXPIRY as any || "15m";
    // console.log(jwtExpiry);
    if (!jwtExpiry) {
        throw new Error("JWT_EXPIRY is not defined");
    }
    
    return jwt.sign({
        id: id,
        email: email,
        fullName: fullName
    },
    jwtSecret,
    {
        expiresIn: jwtExpiry
    }
  );
};

export const generateRefreshToken = async ({ id }: User) => {
    const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;
    if (!refreshTokenSecret) {
        throw new Error("REFRESH_TOKEN_SECRET is not defined");
    }

    const refreshTokenExpiry = process.env.REFRESH_TOKEN_EXPIRY as any || "7d";
    if (!refreshTokenExpiry) {
        throw new Error("REFRESH_TOKEN_EXPIRY is not defined");
    }
    return jwt.sign({
        id: id,
    },
    refreshTokenSecret,
    {
        expiresIn: refreshTokenExpiry
    }
)}