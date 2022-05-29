import { defineConfig } from "vitepress";
import { ThemeConfig } from "../configs/themeConfig.ts";

const base = process.env.BASE || "/";

export default defineConfig({
  title: "larry",
  description: "Life is short, Keep it simple.",
  head: [["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }]],
  // 部署路径
  base: base,
  // 导航
  themeConfig: {
    nav: [
      {
        text: "指南",
        link: "/components/install",
        activeMatch: "^/components/install",
      },
      {
        text: "组件",
        link: "/components/basic/button",
        activeMatch: "^/components/basic/button",
      },
      { text: "gitee", link: "https://gitee.com/lgpr/vitepress" },
      { text: "github", link: "https://gitee.com/lgpr/vitepress" },
    ],
    sidebar: {
      // 指南页面
      "/components/install": [
        {
          text: "开始",
          children: [
            {
              text: "安装",
              link: "/components/install",
            },
          ],
        },
      ],
      // 组件介绍页面
      "/components/basic/button": [
        {
          text: "基础组件",
          children: [
            {
              text: "Button 按钮",
              link: "/components/basic/button",
            },
          ],
        },
      ],
    },
  },
  // markdown配置
  markdown: {
    anchor: { permalink: true },
    toc: { includeLevel: [1] },
    config: (md) => {
      const { demoBlockPlugin } = require("vitepress-theme-demoblock");
      md.use(demoBlockPlugin);
    },
  },
});
