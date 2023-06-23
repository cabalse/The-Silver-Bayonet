import AppState from "../models/context/appstate";
import APP_STATE from "../types/appstate";

const initialAppState: AppState = {
  appState: APP_STATE.StartUp,
  display: {
    map: false,
  },
};

export default initialAppState;
