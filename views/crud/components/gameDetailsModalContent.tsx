import { ReactNode, useEffect, useState } from "react";
import { db } from "../utils/database/db";
import { IGameModel } from "../utils/types";
import ModalHeader from "./modalHeader";

type GameDetailsModalContentProps = {
  onClose: Function;
  selectedGame: IGameModel | null;
};

export default function GameDetailsModalContent({
  onClose,
  selectedGame = null,
}: GameDetailsModalContentProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [game, setGame] = useState<IGameModel | null | undefined>(null);

  async function getGameDetails(id: number) {
    setIsLoading(true);
    let g = await db.games.get(id);
    setGame(g);
    setIsLoading(false);
  }

  useEffect(() => {
    if (selectedGame) {
      getGameDetails(selectedGame.id);
    }
  }, [selectedGame]);

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <ModalHeader onClose={() => onClose()} title={"Game Details"} />
      {game && (
        <div>
          <DetailsEntry>
            <Label> Name </Label>
            <div>{game.name}</div>
          </DetailsEntry>

          <DetailsEntry>
            <Label> Url </Label>
            <div>{game.url}</div>
          </DetailsEntry>

          <DetailsEntry>
            <Label> Author </Label>
            <div>{game.author}</div>
          </DetailsEntry>

          <DetailsEntry>
            <Label> Publishing Date </Label>
            <div>{game.published_date}</div>
          </DetailsEntry>
        </div>
      )}
    </>
  );
}

function DetailsEntry({ children }: { children: ReactNode }) {
  return <div className="w-full flex justify-between mb-2">{children}</div>;
}

function Label({ children }: { children: ReactNode }) {
  return <div className="font-bold">{children}</div>;
}
