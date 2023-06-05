import { createContext, useState } from "react";
import Game from "../models/game";
import PlayingPiece from "../models/playingpiece";
import APP_STATE from "../types/appstate";

type GameContext = {
  state: APP_STATE;
  gameProperties?: Game;
  currentSelectedUnit: number;
  setSelectedUnit: (id: number) => void;
  playingPieces?: PlayingPiece[];
};

const useGameContext = (): [
  gameCTX: React.Context<GameContext>,
  gameState: GameContext
] => {
  const [gameState, setGameState] = useState<GameContext>({
    state: APP_STATE.Init,
    gameProperties: {
      name: "",
      startTime: new Date(),
      endTime: new Date(),
      scenario: undefined,
      turn: 0,
      bluePlayer: "",
      redPlayer: "",
      bluePlayerScore: 0,
      redPlayerScore: 0,
    },
    currentSelectedUnit: 0,
    setSelectedUnit: (id: number) => {
      setGameState((prevState) => ({
        ...prevState,
        currentSelectedUnit: id,
      }));
    },
  });

  const GameCTX = createContext<GameContext>(gameState);

  return [GameCTX, gameState];
};

export default useGameContext;
