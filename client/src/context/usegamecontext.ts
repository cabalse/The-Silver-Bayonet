import { createContext, useState } from "react";
import Game from "../models/game";
import PlayingPiece from "../models/playingpiece";
import APP_STATE from "../types/appstate";
import SIDES from "../types/sides";
import ACTIONS from "../types/actions";

type GameContext = {
  selectedScenario?: string;
  displayMap: boolean;
  state: APP_STATE;
  currentPlayer?: SIDES;
  playerAction: ACTIONS;
  gameProperties?: Game;
  currentSelectedUnit: number;
  playingPieces?: PlayingPiece[];
  setSelectedUnit: (id: number) => void;
  setDisplayMap: (display: boolean) => void;
};

const useGameContext = (): [
  gameCTX: React.Context<GameContext>,
  gameState: GameContext
] => {
  const [gameState, setGameState] = useState<GameContext>({
    selectedScenario: "Scenario One",
    displayMap: false,
    state: APP_STATE.Init,
    currentPlayer: undefined,
    playerAction: ACTIONS.None,
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
    setDisplayMap: (display: boolean) => {
      console.log("Setting display map to: " + display);
      setGameState((prevState) => ({
        ...prevState,
        displayMap: display,
      }));
    },
  });

  const GameCTX = createContext<GameContext>(gameState);

  return [GameCTX, gameState];
};

export default useGameContext;
