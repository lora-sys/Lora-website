// 生活方式数据 - 足迹、阅读、音乐、统计数据

export interface Location {
  city: string;
  country: string;
  coordinates: [number, number];
  description: string;
  isCurrent?: boolean;
}

export interface Book {
  title: string;
  author: string;
  cover: string;
  category: string;
  progress?: number;
}

export interface Song {
  name: string;
  artist: string;
  cover: string;
  spotifyUrl: string;
}

// 足迹地图数据
export const footprintData = {
  currentLocation: {
    city: "西安",
    country: "中国",
    coordinates: [34.3416, 108.9398] as [number, number],
    description: "十三朝古都，现在正在这里",
    isCurrent: true,
  },
  visitedLocations: [
    { city: "北京", country: "中国", coordinates: [39.9042, 116.4074] as [number, number], description: "首都之旅" },
    { city: "成都", country: "中国", coordinates: [30.5728, 104.0668] as [number, number], description: "美食与熊猫" },
    { city: "广州", country: "中国", coordinates: [23.1291, 113.2644] as [number, number], description: "南国风情" },
    { city: "甘肃", country: "中国", coordinates: [36.0611, 103.8343] as [number, number], description: "丝绸之路" },
  ] as Location[],
};

// 阅读清单数据
export const readingData = {
  totalBooks: 150,
  yearlyGoal: 30,
  completedThisYear: 18,
  featuredBooks: [
    {
      title: "Three.js Journey",
      author: "Bruno Simon",
      cover: "/images/books/threejs-journey.jpg",
      category: "Graphics",
      progress: 85,
    },
    {
      title: "Building AI Agents",
      author: "LangChain Team",
      cover: "/images/books/ai-agents.jpg",
      category: "AI",
      progress: 60,
    },
    {
      title: "JavaScript高级程序设计",
      author: "Matt Frisbie",
      cover: "/images/books/js-book.jpg",
      category: "Web",
      progress: 100,
    },
    {
      title: "Clean Code",
      author: "Robert Martin",
      cover: "/images/books/clean-code.jpg",
      category: "Engineering",
      progress: 100,
    },
  ] as Book[],
};

// 音乐品味数据
export const musicData = {
  style: "English Rock & Pop",
  yearlyHours: 350,
  albumsCollected: 45,
  favoriteSongs: [
    {
      name: "Running Up That Hill",
      artist: "Kate Bush",
      cover: "/images/music/running-up-hill.jpg",
      spotifyUrl: "https://open.spotify.com/track/29d0nY7Tv5GKuq16sSfWfP",
    },
    {
      name: "I Love You So",
      artist: "The Walters",
      cover: "/images/music/love-you-so.jpg",
      spotifyUrl: "https://open.spotify.com/track/3hBXKpDVw6bFG5Z8vFB8W5",
    },
  ] as Song[],
};

// 统计数据
export const statisticsData = {
  movies: {
    total: 120,
    averageRating: 4.2,
    recentlyWatched: [
      { title: "The Matrix", rating: 5, year: 1999 },
      { title: "Inception", rating: 4.8, year: 2010 },
      { title: "Interstellar", rating: 5, year: 2014 },
    ],
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
    recentlyPlayed: [
      { name: "Running Up That Hill", artist: "Kate Bush" },
      { name: "Blinding Lights", artist: "The Weeknd" },
      { name: "I Love You So", artist: "The Walters" },
    ],
  },
  reading: {
    totalBooks: 150,
    yearlyGoal: 30,
    completedThisYear: 18,
    currentlyReading: "Three.js Journey",
  },
};

// 生活方式数据
export const lifestyleData = {
  tagline: "Code & Freedom",
  description: "程序员的生活就是自由",
  hobbies: ["Coding", "Reading", "Music", "Travel"],
  philosophy: "在代码中寻找自由，在音乐中释放激情",
};
