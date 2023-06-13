import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./index.css";
import GameContext, {
  GameContextType,
  GameState,
} from "./context/appcontext.ts";
import APP_STATE from "./types/appstate.ts";
import ACTIONS from "./types/actions.ts";

const Main = () => {
  const [gameState, setGameState] = useState<GameState>({
    selectedScenario: "Scenario One",
    displayMap: false,
    state: APP_STATE.Init,
    currentPlayer: undefined,
    playerAction: ACTIONS.None,
    gameProperties: {
      name: "",
      startTime: new Date(),
      endTime: new Date(),
      scenario: undefined,
      turn: 0,
      bluePlayer: "",
      redPlayer: "",
      bluePlayerScore: 0,
      redPlayerScore: 0,
    },
    currentSelectedUnit: 0,
  });

  const gameContextValue: GameContextType = {
    gameState: gameState,
    setSelectedUnit: (id: number) => {
      setGameState((prevState) => ({
        ...prevState,
        currentSelectedUnit: id,
      }));
    },
    setDisplayMap: (display: boolean) => {
      setGameState((prevState) => ({
        ...prevState,
        displayMap: display,
      }));
    },
  };

  return (
    <React.StrictMode>
      <GameContext.Provider value={gameContextValue}>
        <App />
      </GameContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Main />
);
