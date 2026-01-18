import { t, type Dictionary } from "intlayer";

const blogContent = {
  key: "blog",
  content: {
    hero: {
      title: t({
        en: "Thoughts & Ideas",
        zh: "思想与见解",
      }),
      subtitle: t({
        en: "Exploring the frontiers of web development, design, and technology.",
        zh: "探索 Web 开发、设计和技术的最前沿。",
      }),
    },
    tags: t({
      en: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Design",
        "Web3",
        "Animation",
        "UI/UX",
        "Performance",
        "Testing",
      ],
      zh: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "设计",
        "Web3",
        "动画",
        "UI/UX",
        "性能优化",
        "测试",
      ],
    }),
    latestArticles: {
      title: t({
        en: "Latest Articles",
        zh: "最新文章",
      }),
      description: t({
        en: "Check out the most recent posts about web development, design, and technology trends.",
        zh: "查看关于 Web 开发、设计和技术趋势的最新文章。",
      }),
      viewAll: t({
        en: "View all posts",
        zh: "查看所有文章",
      }),
    },
    posts: [
      {
        title: t({
          en: "Hello World",
          zh: "你好，世界",
        }),
        description: t({
          en: "Welcome to my new digital garden.",
          zh: "欢迎来到我的新数字花园。",
        }),
        date: "2024-03-01",
        tag: t({
          en: "General",
          zh: "通用",
        }),
        color: "bg-green-500/10 text-green-500",
      },
      {
        title: t({
          en: "React Server Components",
          zh: "React Server Components",
        }),
        description: t({
          en: "Understanding the paradigm shift in React architecture.",
          zh: "理解 React 架构中的范式转移。",
        }),
        date: "2024-03-05",
        tag: t({
          en: "React",
          zh: "React",
        }),
        color: "bg-cyan-500/10 text-cyan-500",
      },
      {
        title: t({
          en: "The Art of 3D Web Design",
          zh: "3D Web 设计艺术",
        }),
        description: t({
          en: "Creating immersive experiences with Three.js and React Three Fiber.",
          zh: "使用 Three.js 和 React Three Fiber 创建沉浸式体验。",
        }),
        date: "2024-03-10",
        tag: t({
          en: "3D",
          zh: "3D",
        }),
        color: "bg-purple-500/10 text-purple-500",
      },
      {
        title: t({
          en: "Mastering Tailwind v4",
          zh: "精通 Tailwind v4",
        }),
        description: t({
          en: "Deep dive into the new engine and features of Tailwind CSS v4.",
          zh: "深入探讨 Tailwind CSS v4 的新引擎和特性。",
        }),
        date: "2024-03-15",
        tag: t({
          en: "CSS",
          zh: "CSS",
        }),
        color: "bg-blue-500/10 text-blue-500",
      },
      {
        title: t({
          en: "Why I Chose Intlayer Over Next.js Native i18n",
          zh: "为什么我选择 Intlayer 而不是 Next.js 原生 i18n",
        }),
        description: t({
          en: "A deep dive into using Intlayer in Next.js projects, comparing it with native i18n.",
          zh: "深入探讨 Intlayer 在 Next.js 项目中的应用，对比原生 i18n 的优缺点。",
        }),
        date: "2026-01-18",
        tag: t({
          en: "i18n",
          zh: "国际化",
        }),
        color: "bg-orange-500/10 text-orange-500",
      },
    ],
  },
} satisfies Dictionary;

export default blogContent;
