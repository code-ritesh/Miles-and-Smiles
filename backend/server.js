import "dotenv/config.js";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoute from "./routes/authRoute.js";

const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log(`✅ MongoDB connected to ${MONGODB_URI}`))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("🛑 MongoDB connection closed due to app termination");
  process.exit(0);
});

const BACKEND_SERVER_PORT = process.env.BACKEND_SERVER_PORT || 3000;
const BACKEND_SERVER_IP_ADDRESS =
  process.env.BACKEND_SERVER_IP_ADDRESS || "localhost";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // allow all origins
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoute);

app.listen(BACKEND_SERVER_PORT, () => {
  console.log(
    `🚀 Server running at http://${BACKEND_SERVER_IP_ADDRESS}:${BACKEND_SERVER_PORT}`
  );
});
