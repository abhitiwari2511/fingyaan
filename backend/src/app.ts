import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
const app = express();
dotenv.config();

app.use(
  cors({
    origin: function(origin, callback) {
      const allowedOrigins = process.env.CLIENT_URL || 'http://localhost:3000';
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept", "X-Requested-With"],
    exposedHeaders: ['Access-Control-Allow-Origin', 'Access-Control-Allow-Credentials']
  })
);
app.options("*", cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routes import
import userRouter from "./routes/user";

// routes declaration
app.use("/api/v1/users", userRouter);

export default app;
