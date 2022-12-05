import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../utils/database/db";
import GameCard from "./gameCard";

type GamesListProps = {
  onEdit: Function;
  onDelete: Function;
};

export default function GamesList({ onEdit, onDelete }: GamesListProps) {
  const games = useLiveQuery(() => db.games.toArray());

  if (!games) return <div>Loading...</div>;
  return (
    <>
      {games.map((game) => (
        <GameCard game={game} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </>
  );
}
