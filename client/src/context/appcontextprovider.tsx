import { Dispatch, createContext, useReducer } from "react";

import AppState from "../models/context/appstate";
import initialAppState from "./initialappstate";
import appStateReducer, {
  Action as AppStateResucerAction,
} from "./reducers/appstatereducers";

type AppContextType = {
  appState: AppState;
  appStateDispatch: Dispatch<AppStateResucerAction> | (() => void);
};

const initialContextValue: AppContextType = {
  appState: initialAppState,
  appStateDispatch: () => {},
};

export const ApplicationContext =
  createContext<AppContextType>(initialContextValue);

type AppContextproviderProps = {
  children: React.ReactNode;
};

const AppContextprovider = ({ children }: AppContextproviderProps) => {
  const [state, appStateDispatch] = useReducer(
    appStateReducer,
    initialAppState
  );

  const contextValue: AppContextType = {
    appState: state,
    appStateDispatch: appStateDispatch,
  };

  return (
    <ApplicationContext.Provider value={contextValue}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default AppContextprovider;
