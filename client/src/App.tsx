import react, { useEffect, useRef, useState } from "react";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";

import Header from "./components/organisms/layout/header";
import Sider from "./components/organisms/layout/sider";
import StateText from "./components/molecules/statetext";
import ContextMenu from "./components/organisms/contextmenu";
import CreatePlayingPieces from "./components/organisms/createplayingpieces";
import CreateTerrainPieces from "./components/organisms/createterrainpieces";
import useAppContext from "./context/useappcontext";
import { ActionType as SelectedUnitReducerActionType } from "./context/reducers/selectedunitreducer";

import map from "./assets/Grassy_Map.png";
import "./app.css";
import APP_STATE from "./types/appstate";

const Map = () => {
  const [image] = useImage(map);
  return <Image image={image} />;
};

function App() {
  const stageRef = useRef(null);
  const appContext = useAppContext();

  // Signal States
  const [redoMovement, setRedoMovement] = useState(false);
  const [unSelect, setUnSelect] = useState(false);

  return (
    <main className="min-h-screen w-full bg-gray-100 text-gray-700">
      <Header />
      <div className="flex">
        <Sider>
          <StateText state={APP_STATE.Init} />
          <ContextMenu state={APP_STATE.Init} />
        </Sider>
        <div className="w-full p-4">
          {appContext.appState.appState === APP_STATE.Init ? (
            <Stage ref={stageRef} width={1100} height={800} draggable>
              <Layer>
                <Map />
                <CreateTerrainPieces
                  scenarioName={appContext.gameState.selectedScenario}
                />
              </Layer>
              <Layer>
                <CreatePlayingPieces
                  scenarioName={appContext.gameState.selectedScenario}
                  redoMove={{
                    redoMovement: redoMovement,
                    currentSelectedUnit:
                      appContext.gameState.currentSelectedUnit,
                  }}
                  onRedoMovementDone={() => setRedoMovement(false)}
                  unSelect={{
                    unSelect: unSelect,
                    currentSelectedUnit:
                      appContext.gameState.currentSelectedUnit,
                  }}
                  onSelect={(id) => {
                    setUnSelect(true);
                    appContext.selectedUnitDispatch({
                      type: SelectedUnitReducerActionType.SET_SELECTED_UNIT,
                      payload: id,
                    });
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
