import APP_STATE from "../../types/appstate";

type Props = {
  state: APP_STATE;
};

const StateText = ({ state }: Props) => {
  let text = "";
  switch (state) {
    case APP_STATE.StartUp:
    default:
      text =
        "Welcome to The Silver Bayonet game platform. Start by creating a connection between the clients!";
      break;
  }
  return <div className="p-2">{text}</div>;
};

export default StateText;
