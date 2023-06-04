import { KonvaEventObject } from "konva/lib/Node";
import react, { useState } from "react";
import { Image } from "react-konva";
import useImage from "use-image";

type MarkerProps = {
  id: number;
  image: string;
  startPos: { x: number; y: number };
};

const Marker = (props: MarkerProps) => {
  const width = 50;
  const height = 50;

  const [image] = useImage(props.image);
  const [state, setState] = useState({
    id: props.id,
    isDragging: false,
    position: props.startPos,
  });

  const handleOnDragStart = () => {
    setState((prevState) => {
      const ret = {
        ...prevState,
        isDragging: true,
      };
      return ret;
    });
  };

  const handleOnDragEnd = (e: KonvaEventObject<DragEvent>) => {
    setState((prevState) => {
      const ret = {
        ...prevState,
        position: { x: e.target.attrs.x, y: e.target.attrs.y },
        isDragging: false,
      };
      return ret;
    });
  };

  return (
    <>
      <Image
        image={image}
        key={state.id}
        id={state.id + ""}
        x={state.position.x}
        y={state.position.y}
        draggable
        shadowColor="black"
        shadowBlur={10}
        shadowOpacity={0.6}
        shadowOffsetX={state.isDragging ? 10 : 5}
        shadowOffsetY={state.isDragging ? 10 : 5}
        scaleX={state.isDragging ? 1.1 : 1}
        scaleY={state.isDragging ? 1.1 : 1}
        width={width}
        height={height}
        onDragStart={handleOnDragStart}
        onDragEnd={handleOnDragEnd}
      />
    </>
  );
};

export default Marker;
export type { MarkerProps };
