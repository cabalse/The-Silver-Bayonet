import Marker from "./marker";
import PlayingPiece from "./playingpiece";
import Terrain from "./terrain";

type Scenario = {
  id: number;
  name: string;
  description: string;
  image: string;
  turns: number;
  playingPieces: {
    red: PlayingPiece[];
    blue: PlayingPiece[];
    neutral: PlayingPiece[];
  };
  markers: Marker[];
  terrain: Terrain[];
};

export default Scenario;
