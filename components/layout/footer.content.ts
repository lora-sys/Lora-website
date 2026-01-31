import { t, type Dictionary } from "intlayer";

const footerContent = {
  key: "footer",
  content: {
    revealCard: {
      text: t({
        en: "Information wants to be free",
        zh: "信息渴望自由",
      }),
      revealText: t({
        en: "Knowledge wants to be shared",
        zh: "知识渴望分享",
      }),
      title: t({
        en: "Code wants to be beautiful",
        zh: "代码渴望美丽",
      }),
      description: t({
        en: "Hover to reveal the hacker's spirit.",
        zh: "悬停以揭示黑客精神。",
      }),
    },
    rightsReserved: t({
      en: "All rights reserved.",
      zh: "版权所有。",
    }),
  },
} satisfies Dictionary;

export default footerContent;
