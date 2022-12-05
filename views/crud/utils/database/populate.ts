import { IGameModel } from "../types";
import { db } from "./db";

export async function populate() {
  await db.games.bulkAdd(INITIAL_GAMES);
}

const INITIAL_GAMES: Array<IGameModel> = [
  {
    id: 1,
    name: "Some Game Name",
    author: "John Doe",
    url: "https://www.acmeplus.com",
    published_date: "2021-01-01",
  },
  {
    id: 2,
    name: "Some Game Name",
    author: "John Doe",
    url: "https://www.acmeplus.com",
    published_date: "2021-01-01",
  },
  {
    id: 3,
    name: "Some Game Name",
    author: "John Doe",
    url: "https://www.acmeplus.com",
    published_date: "2021-01-01",
  },
  {
    id: 4,
    name: "Some Game Name",
    author: "John Doe",
    url: "https://www.acmeplus.com",
    published_date: "2021-01-01",
  },
];
