import Dexie, { Table } from "dexie";
import { populate } from "./populate";
import { IGameModel } from "../types";

export class GamesDB extends Dexie {
  games!: Table<IGameModel, number>;
  constructor() {
    super("GamesDB");
    this.version(1).stores({
      games: "++id",
    });
  }
}

export const db = new GamesDB();

db.on("populate", populate);
