import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// Получаем __dirname вручную
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//настраиваем собачку на файл src
//и импортируем 3 файла css

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/styles/helpers/variables";
          @import "@/styles/helpers/mixins";
          @import "@/styles/helpers/media";
        `,
      },
    },
  },
});

