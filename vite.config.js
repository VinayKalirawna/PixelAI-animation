import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import glsl from "vite-plugin-glsl";

export default defineConfig({
    plugins: [
        react(),
        glsl({
            include: [
                "**/*.glsl",
                "**/*.wgsl",
                "**/*.vert",
                "**/*.frag",
                "**/*.vs",
                "**/*.fs",
            ],
            exclude: undefined,
            warnDuplicatedImports: true,
            defaultExtension: "glsl",
            compress: false,
            watch: true,
        }),
    ],
    optimizeDeps: {
        exclude: ["sheryjs"],
    },
    define: {
        global: "globalThis",
    },
});
