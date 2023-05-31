import react, { useRef, useState } from "react";
import { Stage, Layer, Image, Line } from "react-konva";
import useImage from "use-image";

import map from "./assets/Grassy_Map.png";
import soldier from "./assets/officer.png";

import "./app.css";

const Map = () => {
  const [image] = useImage(map);
  return <Image image={image} />;
};

function App() {
  const stageRef = useRef(null);

  const Officer = () => {
    const startPos = { x: 100, y: 100 };
    const width = 50;
    const height = 50;

    const lineRef = useRef(null);
    const [image] = useImage(soldier);
    const [state, setState] = useState({
      isDragging: false,
      startPos: startPos,
      draggingStartPos: { x: 0, y: 0 },
    });
    const [dragPos, setDragPos] = useState({ x: 0, y: 0 });
    return (
      <>
        <Image
          image={image}
          key={1}
          id={"1"}
          x={startPos.x}
          y={startPos.y}
          draggable
          shadowColor="black"
          shadowBlur={10}
          shadowOpacity={0.6}
          shadowOffsetX={state.isDragging ? 10 : 5}
          shadowOffsetY={state.isDragging ? 10 : 5}
          scaleX={state.isDragging ? 1.01 : 1}
          scaleY={state.isDragging ? 1.01 : 1}
          width={width}
          height={height}
          onDragStart={(e) => {
            setState((prevState) => {
              return {
                ...prevState,
                startPos: { x: e.target.attrs.x, y: e.target.attrs.y },
                isDragging: true,
                draggingStartPos: { x: e.target.attrs.x, y: e.target.attrs.y },
              };
            });
          }}
          onDragEnd={() => {
            setState((prevState) => {
              return {
                ...prevState,
                isDragging: false,
                draggingStartPos: { x: 0, y: 0 },
              };
            });
            setDragPos({ x: 0, y: 0 });
          }}
          onDragMove={(e) => {
            setDragPos({
              x: e.target.attrs.x + width / 2,
              y: e.target.attrs.y + height / 2,
            });
          }}
        />
        <Line
          ref={lineRef}
          points={[
            state.draggingStartPos.x,
            state.draggingStartPos.y,
            dragPos.x,
            dragPos.y,
          ]}
          tension={0.5}
          stroke="blue"
        />
      </>
    );
  };

  return (
    <>
      <button onClick={() => console.log("Click")}>Undo Movement</button>
      <Stage
        ref={stageRef}
        width={window.innerWidth}
        height={window.innerHeight}
      >
        <Layer>
          <Map />
        </Layer>
        <Layer>
          <Officer />
        </Layer>
      </Stage>
    </>
  );
}

export default App;
