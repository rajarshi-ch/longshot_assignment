import { IGameModel } from "../types";
import { db } from "./db";

export async function populate() {
  await db.games.bulkAdd(INITIAL_GAMES);
}

const INITIAL_GAMES: Array<IGameModel> = [
  {
    id: 1,
    name: "Tetris",
    author: "SVG",
    url: "https://www.abc.com",
    published_date: "2021-01-01",
  },
  {
    id: 2,
    name: "Pong",
    author: "SVG",
    url: "https://www.abc.com",
    published_date: "2021-01-01",
  },
  {
    id: 3,
    name: "Champion Chimp",
    author: "SVG",
    url: "https://www.abc.com",
    published_date: "2021-01-01",
  },
  {
    id: 4,
    name: "Golf",
    author: "SVG",
    url: "https://www.abc.com",
    published_date: "2021-01-01",
  },
];
