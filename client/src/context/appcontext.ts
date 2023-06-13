import { createContext } from "react";
import Game from "../models/game";
import PlayingPiece from "../models/playingpiece";
import APP_STATE from "../types/appstate";
import SIDES from "../types/sides";
import ACTIONS from "../types/actions";

type AppState = {
  selectedScenario?: string;
  displayMap: boolean;
  state: APP_STATE;
  currentPlayer?: SIDES;
  playerAction: ACTIONS;
  gameProperties?: Game;
  currentSelectedUnit: number;
  playingPieces?: PlayingPiece[];
};

const initialState: AppState = {
  selectedScenario: undefined,
  displayMap: false,
  state: APP_STATE.Init,
  currentPlayer: undefined,
  playerAction: ACTIONS.None,
  gameProperties: undefined,
  currentSelectedUnit: -1,
  playingPieces: undefined,
};

const GameContext = createContext<AppState>(initialState);

export default GameContext;
export type { AppState };
