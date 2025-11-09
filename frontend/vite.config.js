import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allows external access (so phone/ngrok can connect)
    allowedHosts: [".ngrok-free.app", ".ngrok-free.dev"], // allow ngrok URLs
    proxy: {
      "/api": "http://localhost:3000", // optional: forward API requests to backend
    },
  },
});
