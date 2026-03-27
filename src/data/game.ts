import type { RawGameItem } from '../types/game'; // 根据实际路径调整

const games: RawGameItem[] = [
  {
    title: "塞尔达传说：旷野之息",
    cover: "/images/zelda.jpg",          // 手动指定封面
    link: "https://www.nintendo.com/",
    status: "completed",
    rating: 10,
    progress: 120,
    achievements: 120,
    description: "开放世界神作，探索海拉鲁大陆的每一个角落。",
    releaseYear: "2017",
    developer: "任天堂",
    genre: ["开放世界", "冒险", "动作"],
    platform: "Nintendo Switch",
  },
  {
    title: "杀戮尖塔2",
    appid: 2868840,                      // 提供 appid，封面自动生成
    link: "https://store.steampowered.com/app/2868840/",
    status: "playing",
    rating: 9,
    progress: 1,
    achievements: 1,
    description: "回响形态了回响形态了",
    releaseYear: "2026",
    developer: "Mega Crit",
    genre: ["卡牌", "roguelike"],
    platform: "PC",
  },
  // ... 更多游戏
];

export default games;