export const siteConfig = {
  // === 基础信息 ===
  name: "Lora",
  username: "lora-sys",
  title: "Full-Stack Developer",
  description: "Personal portfolio of Lora, showcasing projects in AI, Web Development, and more.",
  email: "lora-sys@outlook.com",
  url: "https://loralg.com",

  // === 社交链接 ===
  socials: {
    github: "https://github.com/lora-sys",
    twitter: "https://twitter.com/lora1979391",
    x: "https://twitter.com/lora1979391",
    instagram: "https://instagram.com/lora",
    bilibili: "https://space.bilibili.com/lora",
    douyin: "https://v.douyin.com/lora",
  },

  // === 导航菜单 ===
  nav: [
    { name: "Home", href: "/" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "About", href: "/#about" },
    { name: "Life", href: "/#life" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/#contact" },
  ],

  // === Hero 配置 ===
  hero: {
    typingTexts: ["lora", "build things"],
    cardTexts: ["Full-Stack", "AI", "Blog"],
    profileImage: "/profile.png",
    splineScene: "https://my.spline.design/superkidrobotcopy-BAYAkKbWYHip4KO4Fe2AXtVt/",
  },

  // === 技能配置 ===
  skills: {
    title: "skills & technologies",
    description: "Technologies I work with",
    slugs: [
      "typescript", "javascript", "dart", "java", "react", "flutter", "android",
      "html5", "css3", "nodedotjs", "express", "nextdotjs", "prisma", "amazonaws",
      "postgresql", "firebase", "nginx", "vercel", "testinglibrary", "jest",
      "cypress", "docker", "git", "jira", "github", "gitlab", "visualstudiocode",
      "androidstudio", "sonarqube", "figma",
    ],
    details: [
      { name: "TypeScript", level: 90, category: "Frontend" },
      { name: "JavaScript", level: 85, category: "Frontend" },
      { name: "React", level: 88, category: "Frontend" },
      { name: "Next.js", level: 85, category: "Frontend" },
      { name: "Tailwind CSS", level: 92, category: "Frontend" },
      { name: "Node.js", level: 80, category: "Backend" },
      { name: "PostgreSQL", level: 75, category: "Backend" },
      { name: "Prisma", level: 78, category: "Backend" },
      { name: "Docker", level: 70, category: "Backend" },
      { name: "Flutter", level: 82, category: "Mobile" },
      { name: "Dart", level: 80, category: "Mobile" },
      { name: "Android", level: 65, category: "Mobile" },
      { name: "Git", level: 85, category: "Tools" },
      { name: "VS Code", level: 90, category: "Tools" },
      { name: "Figma", level: 70, category: "Tools" },
    ],
    categories: ["Frontend", "Backend", "Mobile", "Tools"],
  },

  // === 项目配置 ===
  projects: {
    title: "Featured Projects",
    description: "Things I've built",
    items: [
      {
        icon: "bot",
        name: "AI Chat Agent",
        description: "LLM-powered conversational agent with memory and context awareness",
        href: "https://github.com/username/chat-agent",
        cta: "View Project",
        className: "col-span-1 md:col-span-2 md:row-span-2",
        tags: ["React", "OpenAI API", "PostgreSQL", "Redis"],
        background: "particles",
      },
      {
        icon: "shopping-cart",
        name: "E-commerce API",
        description: "Full-stack e-commerce backend with payment integration",
        href: "https://github.com/username/ecommerce-api",
        cta: "View Project",
        className: "col-span-1 md:col-span-1",
        tags: ["Node.js", "Express", "MongoDB", "Stripe"],
        background: "shine-border",
      },
      {
        icon: "bar-chart",
        name: "Analytics Dashboard",
        description: "Real-time data visualization and analytics platform",
        href: "https://github.com/username/dashboard",
        cta: "View Project",
        className: "col-span-1 md:col-span-1",
        tags: ["Next.js", "D3.js", "Prisma", "Tailwind"],
        background: "shine-border",
      },
      {
        icon: "smartphone",
        name: "Mobile Flashcards",
        description: "Cross-platform flashcard app with spaced repetition",
        href: "https://github.com/username/flashcards",
        cta: "View Project",
        className: "col-span-1 md:col-span-2",
        tags: ["Flutter", "Firebase", "Riverpod"],
        background: "none",
      },
      {
        icon: "terminal",
        name: "Dev Tools CLI",
        description: "Developer productivity CLI with multiple utilities",
        href: "https://github.com/username/cli",
        cta: "View Project",
        className: "col-span-1",
        tags: ["Rust", "Clap", "Ollama"],
        background: "none",
      },
    ],
  },

  // === 统计配置 ===
  statistics: {
    movies: {
      total: 120,
      averageRating: 4.2,
      ratingDistribution: [
        { rating: 5, count: 35 },
        { rating: 4, count: 48 },
        { rating: 3, count: 28 },
        { rating: 2, count: 7 },
        { rating: 1, count: 2 },
      ],
    },
    music: {
      yearlyHours: 350,
      albumsCollected: 45,
      topGenres: ["Rock", "Pop", "Indie", "Electronic"],
    },
    reading: {
      totalBooks: 150,
      yearlyGoal: 30,
      completedThisYear: 18,
      currentlyReading: "Three.js Journey",
    },
  },

  // === 博客配置 ===
  blog: {
    hero: {
      title: "Blog",
      subtitle: "Thoughts, tutorials, and insights about web development, 3D art, and technology.",
    },
    tags: ["React", "Next.js", "TypeScript", "3D", "AI", "Web Development", "Design"],
    latestArticles: {
      title: "Latest Articles",
      description: "Explore my thoughts on technology, design, and development.",
      viewAll: "View All",
    },
    posts: [
      {
        title: "Mastering Tailwind v4",
        description: "A comprehensive guide to the new features in Tailwind CSS v4.",
        date: "Jan 15, 2025",
        tag: "CSS",
        color: "bg-blue-500",
      },
      {
        title: "Art of 3D Web Design",
        description: "Exploring the intersection of web development and 3D graphics.",
        date: "Jan 10, 2025",
        tag: "3D",
        color: "bg-purple-500",
      },
      {
        title: "React Server Components",
        description: "Understanding the future of React with Server Components.",
        date: "Jan 5, 2025",
        tag: "React",
        color: "bg-cyan-500",
      },
    ],
  },

  // === 关于配置 ===
  about: {
    displayName: "Lora",
    profileUrl: "https://github.com/lora-sys",
    music: [
      {
        name: "Running Up That Hill",
        artist: "Kate Bush",
        coverImage: "/images/music/running-up-hill.jpg",
        url: "https://open.spotify.com/track/29d0nY7Tv5GKuq16sSfWfP",
      },
      {
        name: "I Love You So",
        artist: "The Walters",
        coverImage: "/images/music/love-you-so.jpg",
        url: "https://open.spotify.com/track/5v4tKKAhlNl款接7Zsp8Npy",
      },
    ],
    location: {
      name: "Location",
      value: "Xian, China",
    },
    interests: [
      { icon: "Code", name: "Graphics", description: "3D graphics and WebGL" },
      { icon: "Brain", name: "AI", description: "Machine learning and LLMs" },
      { icon: " Globe", name: "Web", description: "Full-stack development" },
      { icon: "Cpu", name: "Engineering", description: "Software architecture" },
    ],
    reading: {
      title: "Reading",
      value: "150+ books",
      url: "#statistics",
    },
    philosophy: {
      title: "Code & Freedom",
      description: "A programmer's life is freedom",
    },
    hobbies: [
      { icon: "Code", name: "Coding", tags: ["Coding", "Reading", "Music", "Travel"] },
    ],
  },

  // === 时间线配置 ===
  timeline: {
    title: "Timeline",
    description: "My journey and achievements",
    tags: ["Hackathon", "Award", "Projects", "Learning"],
    items: [
      {
        title: "2025-09-20 | Monad Blitz Hackathon",
        description: "Won first prize with Blockchain Certificate System project at Monad Blitz Hackathon (Chengdu). Built on Monad testnet using NFT and security verification.",
        links: [
          { href: "https://github.com/lora-sys/demo", label: "View Code (GitHub)" },
          { href: "https://www.xxpie.com/m/album?id=68cd19e6c4b884328e315ecd", label: "Photos" },
        ],
      },
      {
        title: "Registration / Team Formation",
        description: "Defined project scope, formed team, and established MVP goals. Focused on 'make it work' approach.",
        link: { href: "/#projects", label: "View Related Projects" },
      },
      {
        title: "Sprint Development",
        description: "Rapid iteration: prototype → interaction → API integration → Bugfix. Made visible progress every hour.",
        link: { href: "/blog", label: "Read Post-mortem" },
      },
      {
        title: "Demo / Retrospective",
        description: "Presented clearly: problem, solution, highlights, results. Organized demo path and retrospective notes.",
        link: { href: "https://github.com/lora-sys", label: "Open Demo / Code" },
      },
    ],
  },

  // === 生活配置 ===
  life: {
    title: "Life & Interests",
    subtitle: "A glimpse into what inspires me, from gaming and tech to cinema and wisdom.",
    hobbies: [
      {
        name: "Black Myth: Wukong",
        description: "Destiny isn't given, it's taken. A dark, mythical journey to the West.",
        Icon: "Gamepad2",
        href: "https://store.steampowered.com/app/2358720/Black_Myth_Wukong/",
        cta: "Play on Steam",
        background: "/images/life/wukong.jpg",
        className: "col-span-3 lg:col-span-1 text-white",
      },
      {
        name: "Ethereum",
        description: "The infinite garden of decentralized innovation and smart contracts.",
        Icon: "Bitcoin",
        href: "https://ethereum.org",
        cta: "Explore Web3",
        background: "/images/life/ethereum.jpg",
        className: "col-span-3 lg:col-span-1 text-white",
      },
      {
        name: "The Shawshank Redemption",
        description: "Fear can hold you prisoner. Hope can set you free.",
        Icon: "Clapperboard",
        href: "https://www.imdb.com/title/tt0111161/",
        cta: "Watch Trailer",
        background: "/images/life/shawshank.jpg",
        className: "col-span-3 lg:col-span-1 text-white",
      },
      {
        name: "Steve Jobs",
        description: "The people who are crazy enough to think they can change the world are the ones who do.",
        Icon: "Book",
        href: "https://www.amazon.com/Steve-Jobs-Walter-Isaacson/dp/1451648537",
        cta: "Read Biography",
        background: "/images/life/steve-jobs.jpg",
        className: "col-span-3 lg:col-span-2 text-white",
      },
      {
        name: "Bakuman",
        description: "Dreams are not something given by others, they are something you fulfill yourself.",
        Icon: "Quote",
        href: "https://myanimelist.net/anime/7674/Bakuman",
        cta: "Read Manga",
        background: "/images/life/bakuman.jpg",
        className: "col-span-3 lg:col-span-1 text-white",
      },
    ],
    tweets: [
      {
        id: "1582807367988654081",
        name: "Andrej Karpathy",
        username: "karpathy",
        content: "The Transformer is a magnificent neural network architecture. It is a general-purpose computer that is differentiable and easily trainable on parallel hardware.",
        image: "/images/avatars/karpathy.jpg",
      },
      {
        id: "1472287874003333122",
        name: "Andrej Karpathy",
        username: "karpathy",
        content: "I often see people saying that AI is consolidating. I think the opposite is true. We are moving from a world where AI is a niche academic field to a world where AI is the fundamental fabric of all software.",
        image: "/images/avatars/karpathy.jpg",
      },
      {
        id: "1002103360646823936",
        name: "Naval",
        username: "naval",
        content: "Learn to sell. Learn to build. If you can do both, you will be unstoppable.",
        image: "/images/avatars/naval.jpg",
      },
    ],
    quotes: [
      {
        text: "Whatever you lose, you'll find it again. But what you throw away you'll never get back.",
        author: "Kenshin Himura",
        from: "Rurouni Kenshin",
      },
      {
        text: "If you don't take risks, you can't create a future.",
        author: "Monkey D. Luffy",
        from: "One Piece",
      },
      {
        text: "Simplicity is the easiest path to true beauty.",
        author: "Seishuu Handa",
        from: "Barakamon",
      },
      {
        text: "The world isn't perfect. But it's there for us, doing the best it can....that's what makes it so damn beautiful.",
        author: "Roy Mustang",
        from: "Fullmetal Alchemist",
      },
    ],
  },

  // === 联系配置 ===
  contact: {
    title: "Get in Touch",
    subtitle: "Let's collaborate and create something amazing together.",
    footer: "Open for collaborations and interesting projects",
  },
};
