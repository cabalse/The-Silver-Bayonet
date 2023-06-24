import APP_STATE from "../../types/appstate";
import GameState from "../../models/context/gamestate";

enum ActionType {
  DISPLAY_MAP = "DISPLAY_MAP",
}

type Action = {
  type: ActionType;
};

const gameControlReducer = (state: GameState, action: Action) => {
  const { type } = action;

  switch (type) {
    case ActionType.DISPLAY_MAP:
      return {
        ...state,
        displayMap: true,
      };

    default:
      return state;
  }
};

export default gameControlReducer;
export type { Action };
export { ActionType };
