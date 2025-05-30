import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/icarling/" : "/",
  title: "Icarling",
  description: "The specification website for Icarling",
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Design",
        items: [
          { text: "Technical", link: "/design/technical" },
          { text: "Artistic", link: "/design/artistic" }
        ]
      }
    ],

    sidebar: [
      {
        text: "Design",
        collapsed: false,
        items: [
          { text: "Technical", link: "/design/technical" },
          { text: "Artistic", link: "/design/artistic" }
        ]
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/socle-commun/icarling" }
    ]
  }
})
