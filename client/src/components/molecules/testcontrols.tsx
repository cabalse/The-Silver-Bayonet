import { useContext } from "react";
import useGameContext from "../../context/usegamecontext";

const TestControls = () => {
  const [GameCTX] = useGameContext();
  const GameState = useContext(GameCTX);

  return (
    <div className="flex">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-1">
        INIT
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-1">
        Button
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => GameState.setDisplayMap(true)}
      >
        Display Map
      </button>
    </div>
  );
};

export default TestControls;
