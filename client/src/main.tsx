import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./index.css";
import useGameContext from "./context/usegamecontext.ts";

const Main = () => {
  const [GameCTX, GameState] = useGameContext();
  return (
    <React.StrictMode>
      <GameCTX.Provider value={GameState}>
        <App />
      </GameCTX.Provider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Main />
);
