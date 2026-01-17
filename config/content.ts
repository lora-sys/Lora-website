import { Gamepad2, Bitcoin, Clapperboard, Book, Quote } from "lucide-react";

export const life = {
  hobbies: [
    {
      name: "Black Myth: Wukong",
      description: "Destiny isn't given, it's taken. A dark, mythical journey to the West.",
      Icon: Gamepad2,
      className: "col-span-3 lg:col-span-1 text-white",
      href: "https://store.steampowered.com/app/2358720/Black_Myth_Wukong/",
      cta: "Play on Steam",
      background: "/images/life/wukong.jpg",
    },
    {
      name: "Ethereum",
      description: "The infinite garden of decentralized innovation and smart contracts.",
      Icon: Bitcoin,
      className: "col-span-3 lg:col-span-1 text-white",
      href: "https://ethereum.org",
      cta: "Explore Web3",
      background: "/images/life/ethereum.jpg",
    },
    {
      name: "The Shawshank Redemption",
      description: "Fear can hold you prisoner. Hope can set you free.",
      Icon: Clapperboard,
      className: "col-span-3 lg:col-span-1 text-white",
      href: "https://www.imdb.com/title/tt0111161/",
      cta: "Watch Trailer",
      background: "/images/life/shawshank.jpg", 
    },
    {
      name: "Steve Jobs",
      description: "The people who are crazy enough to think they can change the world are the ones who do.",
      Icon: Book,
      className: "col-span-3 lg:col-span-2 text-white",
      href: "https://www.amazon.com/Steve-Jobs-Walter-Isaacson/dp/1451648537",
      cta: "Read Biography",
      background: "/images/life/steve-jobs.jpg",
    },
    {
      name: "Bakuman",
      description: "Dreams are not something given by others, they are something you fulfill yourself.",
      Icon: Quote,
      className: "col-span-3 lg:col-span-1 text-white",
      href: "https://myanimelist.net/anime/7674/Bakuman",
      cta: "Read Manga",
      background: "/images/life/bakuman.jpg",
    },
  ],
  tweets: [
    {
      id: "1582807367988654081",
      name: "Andrej Karpathy",
      username: "karpathy",
      content: "The Transformer is a magnificent neural network architecture. It is a general-purpose computer that is differentiable and easily trainable on parallel hardware.",
      image: "https://pbs.twimg.com/profile_images/1581001412112130048/UP9v99Me_400x400.jpg",
    },
    {
      id: "1472287874003333122",
      name: "Andrej Karpathy",
      username: "karpathy",
      content: "I often see people saying that AI is consolidating. I think the opposite is true. We are moving from a world where AI is a niche academic field to a world where AI is the fundamental fabric of all software.",
      image: "https://pbs.twimg.com/profile_images/1581001412112130048/UP9v99Me_400x400.jpg",
    },
    {
      id: "1002103360646823936",
      name: "Naval",
      username: "naval",
      content: "Learn to sell. Learn to build. If you can do both, you will be unstoppable.",
      image: "https://pbs.twimg.com/profile_images/1657502745371336704/UnId79jw_400x400.jpg",
    }
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
};

export const blog = {
  hero: {
    title: "Thoughts & Ideas",
    subtitle: "Exploring the frontiers of web development, design, and technology.",
  },
  tags: [
    "React", "Next.js", "TypeScript", "Tailwind CSS", "Design", "Web3", "Animation", "UI/UX", "Performance", "Testing"
  ],
  posts: [
    {
      title: "Mastering Tailwind v4",
      description: "Deep dive into the new engine and features of Tailwind CSS v4.",
      date: "2024-03-15",
      tag: "CSS",
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      title: "The Art of 3D Web Design",
      description: "Creating immersive experiences with Three.js and React Three Fiber.",
      date: "2024-03-10",
      tag: "3D",
      color: "bg-purple-500/10 text-purple-500",
    },
    {
      title: "React Server Components",
      description: "Understanding the paradigm shift in React architecture.",
      date: "2024-03-05",
      tag: "React",
      color: "bg-cyan-500/10 text-cyan-500",
    },
    {
      title: "Hello World",
      description: "Welcome to my new digital garden.",
      date: "2024-03-01",
      tag: "General",
      color: "bg-green-500/10 text-green-500",
    },
  ],
};
