import GameState from "../../models/context/gamestate";

enum ActionType {
  SET_SELECTED_UNIT = "SET_SELECTED_UNIT",
}

type Action = {
  type: ActionType;
  payload: number;
};

const selectedUnitreducer = (state: GameState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.SET_SELECTED_UNIT:
      return {
        ...state,
        currentSelectedUnit: payload,
      };
    default:
      return state;
  }
};

export default selectedUnitreducer;
export type { Action };
export { ActionType };
