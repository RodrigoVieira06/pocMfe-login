// login-app/vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "loginApp",                // Nome do remote
      filename: "remoteEntry.js",      // Arquivo que será gerado para expor os módulos
      exposes: {
        "./LoginPage": "./src/LoginPage" // Expondo o componente LoginPage
      },
      shared: ["react", "react-dom"]
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  }
});
