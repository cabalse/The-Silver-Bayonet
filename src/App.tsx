import react, { useEffect, useRef, useState } from "react";
import { Stage, Layer, Image, Line } from "react-konva";
import useImage from "use-image";

import map from "./assets/Grassy_Map.png";
import soldier from "./assets/officer.png";

import "./app.css";
import PlayingPiece from "./components/atoms/playingpiece";
import Header from "./components/organisms/layout/header";
import MenuItem from "./components/molecules/menuitem";
import Sider from "./components/organisms/layout/sider";
import StateText from "./components/molecules/statetext";
import APP_STATE from "./components/types/appstate";
import ContextMenu from "./components/organisms/contextmenu";

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
              <PlayingPiece
                id={1}
                image={soldier}
                startPos={{ x: 200, y: 200 }}
                borderColor={"red"}
                redoMove={redoMovement && state.currentSelectedUnit === 1}
                onRedoMovementDone={() => setRedoMovement(false)}
                unSelect={unSelect && state.currentSelectedUnit != 1}
                onSelect={(id) => {
                  setState((prevState) => {
                    setUnSelect(true);
                    const ret = { ...prevState, currentSelectedUnit: id };
                    return ret;
                  });
                }}
                onUnSelectDone={() => setUnSelect(false)}
              />
              <PlayingPiece
                id={2}
                image={soldier}
                startPos={{ x: 200, y: 400 }}
                borderColor={"blue"}
                redoMove={redoMovement && state.currentSelectedUnit === 2}
                onRedoMovementDone={() => setRedoMovement(false)}
                unSelect={unSelect && state.currentSelectedUnit != 2}
                onSelect={(id) => {
                  setState((prevState) => {
                    setUnSelect(true);
                    const ret = { ...prevState, currentSelectedUnit: id };
                    return ret;
                  });
                }}
                onUnSelectDone={() => setUnSelect(false)}
              />
              <PlayingPiece
                id={3}
                image={soldier}
                startPos={{ x: 400, y: 400 }}
                borderColor={"blue"}
                redoMove={redoMovement && state.currentSelectedUnit === 3}
                onRedoMovementDone={() => setRedoMovement(false)}
                unSelect={unSelect && state.currentSelectedUnit != 3}
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
