import react, { useRef, useState } from "react";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";

import map from "./assets/Grassy_Map.png";

import "./app.css";
import Header from "./components/organisms/layout/header";
import Sider from "./components/organisms/layout/sider";
import StateText from "./components/molecules/statetext";
import APP_STATE from "./types/appstate";
import ContextMenu from "./components/organisms/contextmenu";
import CreatePlayingPieces from "./components/organisms/createplayingpieces";

const Map = () => {
  const [image] = useImage(map);
  return <Image image={image} />;
};

function App() {
  const stageRef = useRef(null);

  const [state, setState] = useState({
    gameState: APP_STATE.Init,
    currentSelectedUnit: 0,
  });

  const [redoMovement, setRedoMovement] = useState(false);
  const [unSelect, setUnSelect] = useState(false);

  return (
    <main className="min-h-screen w-full bg-gray-100 text-gray-700">
      <Header />
      <div className="flex">
        <Sider>
          <StateText state={state.gameState} />
          <ContextMenu state={state.gameState} />
        </Sider>
        <div className="w-full p-4">
          <Stage ref={stageRef} width={1100} height={800} draggable>
            <Layer>
              <Map />
            </Layer>
            <Layer>
              <CreatePlayingPieces
                scenarioName="Scenario One"
                redoMove={{
                  redoMovement: redoMovement,
                  currentSelectedUnit: state.currentSelectedUnit,
                }}
                onRedoMovementDone={() => setRedoMovement(false)}
                unSelect={{
                  unSelect: unSelect,
                  currentSelectedUnit: state.currentSelectedUnit,
                }}
                onSelect={(id) => {
                  setState((prevState) => {
                    setUnSelect(true);
                    const ret = { ...prevState, currentSelectedUnit: id };
                    return ret;
                  });
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
