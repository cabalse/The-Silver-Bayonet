import APP_STATE from "../../types/appstate";
import AppState from "../../models/context/appstate";

enum ActionType {
  SWITCHSTATE = "SWITCHSTATE",
}

type Action = {
  type: ActionType;
  payload: {
    appState?: APP_STATE;
  };
};

const appStateReducer = (state: AppState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.SWITCHSTATE:
      return {
        ...state,
        appState: payload.appState || state.appState,
      };
    default:
      return state;
  }
};

export default appStateReducer;
export type { Action };
export { ActionType };
