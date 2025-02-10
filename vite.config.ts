import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "loginApp",
      filename: "remoteEntry.js",
      exposes: {
        "./LoginPage": "./src/LoginPage"
      },
      shared: ["react", "react-dom", "react-router-dom"]
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  }
});
