import APP_STATE from "../../types/appstate";
import { AppState } from "../appcontext";

enum GameStateActionType {
    STARTUP = "STARTUP",
    INIT = "INIT",
    PLAYING   = "PLAYING",
    ENDED = "ENDED",
}

interface GameStateAction {
    type: GameStateActionType;
    payload: any;
}

const gameStateReducer = (state: AppState, action: GameStateAction) => {
    const { type, payload } = action;
    switch (type) {
        case GameStateActionType.STARTUP:
            return {
                ...state,
                state: APP_STATE.StartUp,
            };
        case GameStateActionType.INIT:
            return {
                ...state,
                state: APP_STATE.Init,
            };
        case GameStateActionType.PLAYING:
            return {
                ...state,
                state: APP_STATE.Playing,
            };
        case GameStateActionType.ENDED:
            return {
                ...state,
                state: APP_STATE.Ended,
            };
        default:
            return state;
    }
};

export default gameStateReducer;
export type { GameStateAction };
