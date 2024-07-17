
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  preview: {
    port: 8500,
    strictPort: true,
  },
  server: {
    port: 8500,
    strictPort: true,
    host: true,
    origin: "http://localhost:8500", // Changed to localhost for clarity
  },
});
