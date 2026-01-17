import { t, type Dictionary } from "intlayer";

const heroContent = {
  key: "hero",
  content: {
    typingText: t({
      en: [
        "Hi, I'm lora",
        "I build things for the web",
        "I create intelligent agents",
      ],
      zh: [
        "你好，我是 lora",
        "我为 Web 构建应用",
        "我致力于开发智能体",
      ],
    }),
    cardTexts: t({
      en: ["Full-Stack Developer", "AI Enthusiast", "Tech Blogger"],
      zh: ["全栈开发工程师", "AI 爱好者", "技术博主"],
    }),
  },
} satisfies Dictionary;

export default heroContent;
