import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/ASN_Unauth_Landing_Page/" : "/",
  plugins: [react()],
}));
