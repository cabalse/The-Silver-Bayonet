import SIDES from "../types/sides";

type PlayingPiece = {
  id: number;
  name: string;
  image: string;
  width: number;
  height: number;
  side: SIDES;
  position: { x: number; y: number };
};

export default PlayingPiece;
