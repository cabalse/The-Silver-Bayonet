import react, { useContext, useRef, useState } from "react";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";

import map from "./assets/Grassy_Map.png";

import "./app.css";
import Header from "./components/organisms/layout/header";
import Sider from "./components/organisms/layout/sider";
import StateText from "./components/molecules/statetext";
import ContextMenu from "./components/organisms/contextmenu";
import CreatePlayingPieces from "./components/organisms/createplayingpieces";
import CreateTerrainPieces from "./components/organisms/createterrainpieces";
import GameContext from "./context/gamecontext";

const Map = () => {
  const [image] = useImage(map);
  return <Image image={image} />;
};

function App() {
  const stageRef = useRef(null);

  // Signal States
  const [redoMovement, setRedoMovement] = useState(false);
  const [unSelect, setUnSelect] = useState(false);

  // Context
  const gameContext = useContext(GameContext);
  const { gameState } = gameContext;

  return (
    <main className="min-h-screen w-full bg-gray-100 text-gray-700">
      <Header />
      <div className="flex">
        <Sider>
          <StateText state={gameState?.state} />
          <ContextMenu state={gameState?.state} />
        </Sider>
        <div className="w-full p-4">
          {gameState?.displayMap ? (
            <Stage ref={stageRef} width={1100} height={800} draggable>
              <Layer>
                <Map />
                <CreateTerrainPieces
                  scenarioName={gameState.selectedScenario}
                />
              </Layer>
              <Layer>
                <CreatePlayingPieces
                  scenarioName={gameState.selectedScenario}
                  redoMove={{
                    redoMovement: redoMovement,
                    currentSelectedUnit: gameState.currentSelectedUnit,
                  }}
                  onRedoMovementDone={() => setRedoMovement(false)}
                  unSelect={{
                    unSelect: unSelect,
                    currentSelectedUnit: gameState.currentSelectedUnit,
                  }}
                  onSelect={(id) => {
                    setUnSelect(true);
                    gameContext.setSelectedUnit ? id : null;
                  }}
                  onUnSelectDone={() => setUnSelect(false)}
                />
              </Layer>
            </Stage>
          ) : null}
        </div>
      </div>
    </main>
  );
}

export default App;
