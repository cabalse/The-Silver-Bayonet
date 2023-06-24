import ACTIONS from "../types/actions";
import APP_STATE from "../types/appstate";
import GameState from "../models/context/gamestate";

const initialGameState: GameState = {
  selectedScenario: undefined,
  displayMap: false,
  gameState: APP_STATE.Init,
  currentPlayer: undefined,
  playerAction: ACTIONS.None,
  gameProperties: undefined,
  currentSelectedUnit: -1,
  playingPieces: undefined,
};

export default initialGameState;
