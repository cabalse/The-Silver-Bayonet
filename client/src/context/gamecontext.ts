import { createContext } from "react";
import Game from "../models/game";
import PlayingPiece from "../models/playingpiece";
import APP_STATE from "../types/appstate";
import SIDES from "../types/sides";
import ACTIONS from "../types/actions";

type GameState = {
  selectedScenario?: string;
  displayMap: boolean;
  state: APP_STATE;
  currentPlayer?: SIDES;
  playerAction: ACTIONS;
  gameProperties?: Game;
  currentSelectedUnit: number;
  playingPieces?: PlayingPiece[];
};

type GameContextType = {
  gameState?: GameState;
  setSelectedUnit?: (id: number) => void;
  setDisplayMap?: (display: boolean) => void;
};

const initialState: GameContextType = {};

const GameContext = createContext<GameContextType>(initialState);

export default GameContext;
export type { GameState, GameContextType };
