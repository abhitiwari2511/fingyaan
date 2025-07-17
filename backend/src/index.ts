import dotenv from "dotenv";
import app from "./app";
import { log } from "console";
import cron from "node-cron";

dotenv.config({ path: "./.env" });

const pingServer = async () => {
  try {
    const url =
      process.env.RENDER_URL || `http://localhost:${process.env.PORT || 3000}`;
  } catch (error) {
    if (error instanceof Error) {
      console.log(`Ping failed at ${new Date().toISOString()}:`, error.message);
    }
  }
};

try {
  app.listen(process.env.PORT || 3000, () => {
    log(`Server is running at PORT : ${process.env.PORT}`);

    if (process.env.NODE_ENV === "production") {
      cron.schedule("*/10 * * * *", pingServer, {
        timezone: "UTC",
      });
      console.log("Health check cron job scheduled for every 10 minutes");
    }
  });
} catch (error) {
  console.log("DB connection failed", error);
}
