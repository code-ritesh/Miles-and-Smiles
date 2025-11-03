import "dotenv/config.js";
import app from "./app.js";
import { connectDB, disconnectDB } from "./db.js";

const PORT = process.env.BACKEND_SERVER_PORT || 3000;
const IP_ADDRESS = process.env.BACKEND_SERVER_IP_ADDRESS || "localhost";

process.on("SIGINT", async () => {
  await disconnectDB();
  console.log("App termination successful.");
  process.exit(0);
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(
        `🚀 Server running at http://${IP_ADDRESS}:${PORT}`
      );
    });
  } catch (err) {
    console.error("Failed to start server", err);
    process.exit(1);
  }
};

startServer();