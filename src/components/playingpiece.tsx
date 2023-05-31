import react, { useEffect, useRef, useState } from "react";
import { Image, Line } from "react-konva";
import useImage from "use-image";

type PlayingPieceProps = {
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

const PlayingPiece = (props: PlayingPieceProps) => {
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

export default PlayingPiece;
export type { PlayingPieceProps };
