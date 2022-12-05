import { IGameModel } from "./types";

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

export const INITIAL_STATE = { games: INITIAL_GAMES };

export default function gamesReducer({ state, action }: any) {
  switch (action.type) {
    case "create":
      return { count: state.count + 1 };
    case "edit":
      return { count: state.count - 1 };
    case "delete":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
