import { theme } from "docs-shared";
import {
  enNavbarConfig,
  zhNavbarConfig,
  ruNavbarConfig,
} from "./navbar/index.js";
import {
  enSidebarConfig,
  zhSidebarConfig,
  ruSidebarConfig,
} from "./sidebar/index.js";

export default theme("theme", {
  repo: "vuepress-theme-hope/vuepress-theme-hope",

  blog: {
    name: "VuePress Theme Hope",
  },

  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },

  fullscreen: true,

  locales: {
    "/": {
      navbar: enNavbarConfig,
      sidebar: enSidebarConfig,
    },
    "/zh/": {
      navbar: zhNavbarConfig,
      sidebar: zhSidebarConfig,
    },
    "/ru/": {
      navbar: ruNavbarConfig,
      sidebar: ruSidebarConfig,
    },
  },

  plugins: {
    blog: true,

    components: {
      components: [
        "AudioPlayer",
        "Badge",
        "BiliBili",
        "Catalog",
        "CodePen",
        "PDF",
        "StackBlitz",
        "VideoPlayer",
        "YouTube",
      ],

      componentOptions: {
        pdf: {
          pdfjs: "/assets/lib/pdfjs/",
        },
      },

      rootComponents: {
        notice: {
          locales: {
            "/": {
              title: "New docs location",
              content: "Our docs has moved to a new domain vuejs.press",
              actions: [
                {
                  text: "Visit Now",
                  link: "https://theme-hope.vuejs.press",
                },
              ],
            },
            "/zh/": {
              title: "新的文档地址",
              content: "我们的文档已经迁移至新域名 vuejs.press 下。",
              actions: [
                {
                  text: "立即访问",
                  link: "https://theme-hope.vuejs.press/zh/",
                },
              ],
            },
            "/ru/": {
              title: "Новое местоположение документации",
              content: "Наша документация переехала на новый домен vuejs.press",
              actions: [
                {
                  text: "Посетите сейчас",
                  link: "https://plugin-componnts.vuejs.press/ru/",
                },
              ],
            },
          },
        },
      },
    },

    copyright: true,

    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgMark: true,
      imgSize: true,
      include: true,
      mathjax: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    pwa: {
      update: "hint",
      favicon: "/favicon.ico",
      themeColor: "#46bd87",
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
          {
            name: "Config",
            short_name: "Config",
            url: "/config/",
            icons: [
              {
                src: "/assets/icon/config-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/config-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
          {
            name: "Cookbook",
            short_name: "Cookbook",
            url: "/cookbook/",
            icons: [
              {
                src: "/assets/icon/basic-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/basic-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
