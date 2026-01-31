import { t, type Dictionary } from "intlayer";

const aboutContent = {
  key: "about",
  content: {
    typingAnimation: t({
      en: "I am LORA",
      zh: "我是 LORA",
    }),
    profileCta: t({
      en: "View Profile",
      zh: "查看个人主页",
    }),
    music: {
      cta: t({
        en: "Listen",
        zh: "立即收听",
      }),
    },
    location: {
      name: t({
        en: "Location",
        zh: "所在地",
      }),
      description: t({
        en: "Xian, China",
        zh: "中国，西安",
      }),
    },
    techStack: {
      name: t({
        en: "Tech Stack",
        zh: "技术栈",
      }),
      description: t({
        en: "Always learning",
        zh: "持续学习中",
      }),
    },
  },
} satisfies Dictionary;

export default aboutContent;
