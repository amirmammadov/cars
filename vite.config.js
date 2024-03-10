import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.CURRENCY_API": JSON.stringify(env.CURRENCY_API),
    },
    plugins: [react()],
  };
});
