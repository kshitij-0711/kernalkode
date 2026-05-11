import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Boring Studios – Premium Web Design & Development Agency",
    short_name: "Boring Studios",
    description:
      "Revenue-first web design & development studio. High-converting websites, landing pages & e-commerce stores that turn visitors into customers.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f0f0f",
    theme_color: "#0f0f0f",
    orientation: "portrait-primary",
    categories: ["business", "design", "technology"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
