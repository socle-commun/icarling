import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Icarling",
  description: "The specification website for Icarling",
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
