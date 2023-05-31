import MenuItem from "../molecules/menuitem";
import APP_STATE from "../types/appstate";

type Props = {
  state: APP_STATE;
};

const ContextMenu = ({ state }: Props) => {
  switch (state) {
    case APP_STATE.StartUp:
    default:
      return (
        <>
          <MenuItem text="Connect" />
        </>
      );
  }
};

export default ContextMenu;
