# Lora-website

基于 Next.js 16 构建的个人网站，集成了 Contentlayer、Fumadocs 和多种 Magic UI 组件。

## 技术栈

- **框架**: Next.js 16 (App Router)
- **内容管理**: Contentlayer
- **文档/博客 UI**: Fumadocs
- **组件库**: Tailwind CSS 4, Radix UI, Magic UI, Framer Motion
- **部署**: Cloudflare Pages (使用 OpenNext)
- **包管理器**: Bun / npm

## 开发指南

首先，安装依赖：

```bash
bun install
```

启动开发服务器：

```bash
bun dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看结果。

## 自定义配置

本项目使用 `config/site.ts` 文件集中管理所有站点内容。修改此文件即可自定义整个网站，无需接触代码。

### 配置文件结构

```typescript
import type { SiteConfig } from "@/config/site"

export const siteConfig: SiteConfig = {
  // 基本信息
  name: "Lora",
  username: "lora-sys",
  title: "Software Engineer & Designer",
  description: "专注于软件工程和交互设计的个人网站",
  email: "contact@example.com",

  // 社交链接
  socials: {
    github: "https://github.com/username",
    twitter: "https://twitter.com/username",
    instagram: "https://instagram.com/username",
    bilibili: "https://bilibili.com/username",
    douyin: "https://douyin.com/username",
  },

  // 导航栏
  nav: [
    { title: "首页", href: "/" },
    { title: "技能", href: "/#skills" },
    { title: "项目", href: "/#projects" },
    { title: "博客", href: "/blog" },
    { title: "关于", href: "/#about" },
  ],

  // 首页 Hero 区域
  hero: {
    title: "你好，我是 Lora",
    subtitle: "Software Engineer & Designer",
    description: "专注于软件工程和交互设计的个人网站",
    avatar: "/avatar.png",
    ctaText: "查看项目",
    ctaHref: "/#projects",
  },

  // 技能展示
  skills: {
    slugs: [
      "typescript",
      "react",
      "nextjs",
      "tailwind",
      "nodejs",
      "python",
      // 添加或删除技能...
    ],
    details: [
      {
        category: "Frontend",
        slug: "react",
        description: "熟练使用 React 及其生态系统",
        technologies: ["React", "Next.js", "Gatsby"],
      },
      // 添加更多技能分类...
    ],
  },

  // 项目展示
  projects: {
    title: "我的项目",
    description: "精选项目展示",
    items: [
      {
        title: "项目名称",
        description: "项目描述",
        href: "https://github.com/username/project",
        thumbnail: "/images/projects/project1.png",
        tags: ["React", "TypeScript", "Tailwind"],
        stats: ["⭐ 100", "🍴 20"],
      },
      // 添加更多项目...
    ],
  },

  // 统计数据
  statistics: {
    movies: { count: 150, label: "部电影" },
    music: { count: 892, label: "首歌" },
    reading: { count: 12, label: "本书" },
  },

  // 博客配置
  blog: {
    hero: {
      title: "博客",
      description: "记录学习心得和技术分享",
    },
    tags: ["React", "TypeScript", "Design", "Life"],
    latestArticles: [
      {
        title: "文章标题",
        description: "文章描述",
        date: "2024-01-01",
        href: "/blog/article-slug",
        tags: ["React"],
      },
      // 添加更多文章...
    ],
    posts: [
      {
        slug: "article-slug",
        title: "文章标题",
        description: "SEO 描述",
        date: "2024-01-01",
        tags: ["React"],
        content: "文章内容...",
      },
      // 添加更多文章...
    ],
  },

  // 关于页面
  about: {
    title: "关于我",
    description: "了解我的故事",
    content: "这里是关于我的详细介绍...",
    skills: ["TypeScript", "React", "Node.js"],
    career: [
      {
        company: "公司名称",
        role: "职位",
        date: "2023 - 至今",
      },
      // 添加更多职业经历...
    ],
  },

  // 时间线
  timeline: {
    title: "时间线",
    description: "记录重要时刻",
    items: [
      {
        date: "2024-01",
        title: "重要事件",
        description: "事件描述",
      },
      // 添加更多时间线事件...
    ],
  },

  // 生活页面
  life: {
    title: "生活",
    description: "工作之外的生活",
    hobbies: [
      { name: "摄影", icon: "📷" },
      { name: "旅行", icon: "✈️" },
    ],
    tweets: [
      {
        content: "有趣的推文内容",
        date: "2024-01-01",
      },
    ],
    quotes: [
      { content: "座右铭", author: "作者" },
    ],
  },

  // 联系页面
  contact: {
    title: "联系我",
    description: "期待与你的交流",
    email: "contact@example.com",
    socials: {
      github: "https://github.com/username",
      twitter: "https://twitter.com/username",
    },
  },
}
```

### 必改项清单

在发布网站前，请确保修改以下内容：

- [ ] `name` - 你的姓名或昵称
- [ ] `username` - GitHub 用户名
- [ ] `title` - 主页标题
- [ ] `description` - 网站描述
- [ ] `email` - 你的邮箱
- [ ] `socials` - 所有社交链接
- [ ] `hero.avatar` - 头像图片路径
- [ ] `projects.items` - 你的项目列表
- [ ] `about.content` - 关于你的介绍
- [ ] `contact.email` - 联系邮箱

### 添加新技能

在 `skills.details` 中添加新的技能分类：

```typescript
{
  category: "Backend",
  slug: "nodejs",
  description: "服务端开发",
  technologies: ["Node.js", "Express", "NestJS"],
}
```

### 添加新项目

在 `projects.items` 中添加新项目：

```typescript
{
  title: "新项目名称",
  description: "项目描述",
  href: "https://github.com/username/project",
  thumbnail: "/images/projects/new-project.png",
  tags: ["Next.js", "TypeScript"],
  stats: ["⭐ 50", "🍴 10"],
}
```

### 添加博客文章

有两种方式添加博客文章：

1. **通过配置文件** - 在 `blog.posts` 中添加文章内容
2. **通过 Markdown 文件** - 在 `content/blog/` 目录添加 `.md` 文件

## 部署说明 (Cloudflare Pages)

本项目针对 Cloudflare Pages 进行了优化，使用 `@opennextjs/cloudflare` 适配器。

### 本地构建

在部署之前，你可以运行以下命令进行本地构建以检查兼容性：

```bash
bun run build:cf
```

### 部署步骤

1. **关联 GitHub**: 在 Cloudflare 控制台创建新的 Pages 项目并关联此仓库。
2. **构建设置**:
   - **Framework preset**: `None` (或者手动配置)
   - **Build command**: `npm run build:cf`
   - **Build output directory**: `.open-next/assets`
3. **环境变量**:
   - 在 **Settings -> Functions -> Compatibility flags** 中添加 `nodejs_compat` 标志（Production 和 Preview 都需要）。

## 故障排除

### wrangler.jsonc 架构加载错误
如果遇到 `无法从 node_modules/wrangler/config-schema.json 加载架构` 的警告，请确保已安装 `wrangler` 开发依赖：

```bash
npm install -D wrangler --legacy-peer-deps
```

## 许可证

[MIT](LICENSE)
