import Game from "../game";
import PlayingPiece from "../playingpiece";
import ACTIONS from "../../types/actions";
import APP_STATE from "../../types/appstate";
import SIDES from "../../types/sides";

type GameState = {
  selectedScenario?: string;
  displayMap: boolean;
  gameState: APP_STATE;
  currentPlayer?: SIDES;
  playerAction: ACTIONS;
  gameProperties?: Game;
  currentSelectedUnit: number;
  playingPieces?: PlayingPiece[];
};

export default GameState;
