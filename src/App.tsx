import react, { useEffect, useRef, useState } from "react";
import { Stage, Layer, Image, Line } from "react-konva";
import useImage from "use-image";

import map from "./assets/Grassy_Map.png";
import soldier from "./assets/officer.png";

import "./app.css";

type OfficerProps = {
  id: number;
  image: string;
  startPos: { x: number; y: number };
  borderColor: string;
  redoMove: boolean;
  onSelect: (id: number) => void;
  unSelect: boolean;
  onUnSelectDone: () => void;
  onRedoMovementDone: () => void;
};

const Officer = (props: OfficerProps) => {
  const width = 50;
  const height = 50;

  const lineRef = useRef(null);
  const [image] = useImage(props.image);
  const [state, setState] = useState({
    id: props.id,
    isSelected: false,
    isDragging: false,
    currentPos: props.startPos,
    startPosOfMovement: props.startPos,
    draggingStartPos: { x: 0, y: 0 },
  });
  const [dragPos, setDragPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (props.redoMove) {
      setState((prevState) => {
        props.onRedoMovementDone();
        const ret = {
          ...prevState,
          currentPos: prevState.startPosOfMovement,
        };
        return ret;
      });
    }
    if (props.unSelect) {
      setState((prevState) => {
        props.onUnSelectDone();
        const ret = { ...prevState, isSelected: false };
        return ret;
      });
    }
  }, [props]);

  return (
    <>
      <Image
        image={image}
        key={state.id}
        id={"1"}
        x={state.currentPos.x}
        y={state.currentPos.y}
        draggable
        shadowColor="black"
        shadowBlur={10}
        shadowOpacity={0.6}
        shadowOffsetX={state.isDragging ? 10 : 5}
        shadowOffsetY={state.isDragging ? 10 : 5}
        scaleX={state.isDragging ? 1.1 : 1}
        scaleY={state.isDragging ? 1.1 : 1}
        strokeWidth={state.isSelected ? 2 : 0}
        stroke={props.borderColor}
        width={width}
        height={height}
        onClick={() => {
          setState((prevState) => {
            return { ...prevState, isSelected: true };
          });
          props.onSelect(state.id);
        }}
        onDragStart={(e) => {
          setState((prevState) => {
            props.onSelect(state.id);
            const ret = {
              ...prevState,
              isSelected: true,
              currentPos: { x: e.target.attrs.x, y: e.target.attrs.y },
              startPosOfMovement: { x: e.target.attrs.x, y: e.target.attrs.y },
              isDragging: true,
              draggingStartPos: {
                x: e.target.attrs.x + width / 2,
                y: e.target.attrs.y + height / 2,
              },
            };
            return ret;
          });
        }}
        onDragEnd={(e) => {
          setState((prevState) => {
            const ret = {
              ...prevState,
              currentPos: { x: e.target.attrs.x, y: e.target.attrs.y },
              isDragging: false,
              draggingStartPos: { x: 0, y: 0 },
            };
            return ret;
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

const Map = () => {
  const [image] = useImage(map);
  return <Image image={image} />;
};

function App() {
  const stageRef = useRef(null);

  const [state, setState] = useState({
    currentSelectedUnit: 0,
  });

  const [redoMovement, setRedoMovement] = useState(false);
  const [unSelect, setUnSelect] = useState(false);

  return (
    <>
      <button onClick={() => setRedoMovement(true)}>Undo Movement</button>
      <Stage
        ref={stageRef}
        width={window.innerWidth}
        height={window.innerHeight}
      >
        <Layer>
          <Map />
        </Layer>
        <Layer>
          <Officer
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
          <Officer
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
          <Officer
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
    </>
  );
}

export default App;
