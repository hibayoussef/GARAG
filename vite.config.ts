import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    // tailwindcss(),
    svgr({
      svgrOptions: {
        icon: true,
        // This will transform your SVG to a React component
        exportType: "named",
        namedExport: "ReactComponent",
      },
    }),
    // VitePWA({
    //   registerType: "autoUpdate",
    //   strategies: "generateSW",
    //   manifest: {
    //     name: "SANN BOOKS",
    //     short_name: "SANN",
    //     start_url: ".",
    //     display: "standalone",
    //     background_color: "#ffffff",
    //     theme_color: "#000000",
    //     icons: [
    //       {
    //         src: "pwa-192x192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //       {
    //         src: "pwa-512x512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //     ],
    //   },
    // }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "build",
  },
  optimizeDeps: {
    force: true,
    include: ["@hello-pangea/dnd"],
  },
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import svgr from "vite-plugin-svgr";
// import path from "path";
// import { VitePWA } from "vite-plugin-pwa";

// export default defineConfig({
//   plugins: [
//     react(),

//     svgr({
//       svgrOptions: {
//         icon: true,
//         exportType: "named",
//         namedExport: "ReactComponent",
//       },
//     }),
//     VitePWA({
//       registerType: "autoUpdate",
//       manifest: {
//         name: "MyWebSite",
//         short_name: "MySite",
//         description: "Your app description",
//         theme_color: "#ffffff",
//         background_color: "#ffffff",
//         display: "standalone",
//         start_url: "/",
//         icons: [
//           {
//             src: "/pwa-192x192.png",
//             sizes: "192x192",
//             type: "image/png",
//             purpose: "any maskable",
//           },
//           {
//             src: "/pwa-512x512.png",
//             sizes: "512x512",
//             type: "image/png",
//             purpose: "any maskable",
//           },
//         ],
//       },
//       includeAssets: [
//         "favicon.ico",
//         "apple-touch-icon.png",
//         "site.webmanifest",
//       ],
//       workbox: {
//         maximumFileSizeToCacheInBytes: 5000000,
//         globPatterns: ["**/*.{js,css,html,ico,png,svg,json}"],
//       },
//     }),
//   ],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
//   build: {
//     outDir: "build",
//   },
//   optimizeDeps: {
//     force: true,
//     include: ["@hello-pangea/dnd"],
//   },
// });
