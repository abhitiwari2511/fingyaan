import dotenv from "dotenv"
import app from "./app";
import { log } from "console";

dotenv.config({path: "./.env"});

try {
    app.listen(process.env.PORT || 3000, () => {
        log(`Server is running at PORT : ${process.env.PORT}`)
    })    
} catch (error) {
    console.log("DB connection failed",error)
}