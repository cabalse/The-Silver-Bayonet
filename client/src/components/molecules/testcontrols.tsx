import { useContext } from "react";
import GameContext from "../../context/appcontext";

const TestControls = () => {
  const gameContext = useContext(GameContext);

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
        onClick={() =>
          gameContext.setDisplayMap ? gameContext?.setDisplayMap(true) : null
        }
      >
        Display Map
      </button>
    </div>
  );
};

export default TestControls;
