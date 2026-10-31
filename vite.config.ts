import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ command, mode }) => {
  const isDev = command === "serve" || mode === "development";

  if (isDev) {
    return {
      plugins: [react()],
      server: {
        port: 5175,
        host: true,
      },
      resolve: {
        alias: {
          "@devhorizon/dls": path.resolve(__dirname, "src/index.ts"),
        },
      },
    };
  }

  return {
    plugins: [react()],
    build: {
      outDir: path.resolve(__dirname, "dist"),
      emptyOutDir: true,
      lib: {
        entry: path.resolve(__dirname, "src/index.ts"),
        name: "DevHorizonDLS",
        fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
        formats: ["es", "cjs"],
      },
      rollupOptions: {
        external: [
          "react",
          "react-dom",
          "react/jsx-runtime",
          "react/jsx-dev-runtime",
          "react-router-dom",
          "lucide-react",
        ],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            "react/jsx-runtime": "jsxRuntime",
            "react-router-dom": "ReactRouterDOM",
            "lucide-react": "LucideReact",
          },
          assetFileNames: (assetInfo) => {
            if (assetInfo.name === "style.css") return "style.css";
            return assetInfo.name || "asset";
          },
        },
      },
    },
  };
});
