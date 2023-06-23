import useAppContext from "../../context/useappcontext";
import { ActionType } from "../../context/reducers/appstatereducers";
import APP_STATE from "../../types/appstate";

const TestControls = () => {
  const { appStateDispatch } = useAppContext();

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
          appStateDispatch({
            type: ActionType.SWITCHSTATE,
            payload: { appState: APP_STATE.Init },
          })
        }
      >
        Display Map
      </button>
    </div>
  );
};

export default TestControls;
