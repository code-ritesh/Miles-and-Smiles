import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js";
dotenv.config();
const SERVER_PORT = process.env.SERVER_PORT;
const SERVER_IP_ADDRESS = process.env.SERVER_IP_ADDRESS;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoute);



app.listen(SERVER_PORT, () => {
  console.log(
    `Server is running on port http://${SERVER_IP_ADDRESS}:${SERVER_PORT}`
  );
});
