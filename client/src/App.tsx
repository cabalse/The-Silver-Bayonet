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
import useGameContext from "./context/usegamecontext";
import CreateTerrainPieces from "./components/organisms/createterrainpieces";

const Map = () => {
  const [image] = useImage(map);
  return <Image image={image} />;
};

function App() {
  const stageRef = useRef(null);

  // Signal States
  const [redoMovement, setRedoMovement] = useState(false);
  const [unSelect, setUnSelect] = useState(false);

  const [GameCTX] = useGameContext();
  const GameState = useContext(GameCTX);

  return (
    <main className="min-h-screen w-full bg-gray-100 text-gray-700">
      <Header />
      <div className="flex">
        <Sider>
          <StateText state={GameState.state} />
          <ContextMenu state={GameState.state} />
        </Sider>
        <div className="w-full p-4">
          <Stage ref={stageRef} width={1100} height={800} draggable>
            <Layer>
              <Map />
              <CreateTerrainPieces scenarioName="Scenario One" />
            </Layer>
            <Layer>
              <CreatePlayingPieces
                scenarioName="Scenario One"
                redoMove={{
                  redoMovement: redoMovement,
                  currentSelectedUnit: GameState.currentSelectedUnit,
                }}
                onRedoMovementDone={() => setRedoMovement(false)}
                unSelect={{
                  unSelect: unSelect,
                  currentSelectedUnit: GameState.currentSelectedUnit,
                }}
                onSelect={(id) => {
                  setUnSelect(true);
                  GameState.setSelectedUnit(id);
                }}
                onUnSelectDone={() => setUnSelect(false)}
              />
            </Layer>
          </Stage>
        </div>
      </div>
    </main>
  );
}

export default App;
