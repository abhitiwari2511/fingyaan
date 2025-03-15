import { Router } from "express";
import { loginUser, logoutUser, refreshAccessToken, registerUser } from "../controllers/user";
import { verifyJWT } from "../middlewares/auth";

const userRouter = Router()

userRouter.route("/signup").post(
    registerUser
)

userRouter.route("/login").post(loginUser)

// secured route
userRouter.route("/logout").post(verifyJWT, logoutUser)
userRouter.route("/me").post(refreshAccessToken)

export default userRouter