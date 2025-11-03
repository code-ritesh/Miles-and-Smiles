// app.js

import express from "express";
import cors from "cors";
import authRoute from "./routes/authRoute.js";

// Create the app
const app = express();

// --- Middleware Setup ---
// 1. Enable CORS for all routes
app.use(cors()); 

// 2. Parse JSON bodies
app.use(express.json());

// 3. Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// --- Route Setup ---
app.use("/auth", authRoute);

// Default export the configured app
export default app;