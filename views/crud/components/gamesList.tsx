import { IGameModel } from "../utils/types";
import GameCard from "./gameCard";

type GamesListProps = {
  games: Array<IGameModel> | undefined;
  onEdit: Function;
  onDelete: Function;
  onDetails: Function;
};

export default function GamesList({
  onEdit,
  onDelete,
  games,
  onDetails,
}: GamesListProps) {
  if (!games) return <div>Loading...</div>;
  return (
    <>
      {games.map((game) => (
        <GameCard
          key={game.id}
          game={game}
          onEdit={onEdit}
          onDelete={onDelete}
          onDetails={onDetails}
        />
      ))}
    </>
  );
}
