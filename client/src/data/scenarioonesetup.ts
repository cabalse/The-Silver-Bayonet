import Scenario from "../models/scenario";
import SIDES from "../types/sides";

const ScenarioOneSetup: Scenario = {
  id: 1,
  name: "Scenario One",
  description: "A simple scenario to get you started.",
  image: "https://via.placeholder.com/50",
  turns: 10,
  playingPieces: {
    red: [
      {
        id: 1,
        name: "Red 1",
        image: "https://via.placeholder.com/50",
        width: 50,
        height: 50,
        side: SIDES.Red,
        position: { x: 0, y: 0 },
      },
      {
        id: 2,
        name: "Red 2",
        image: "https://via.placeholder.com/50",
        width: 50,
        height: 50,
        side: SIDES.Red,
        position: { x: 0, y: 100 },
      },
      {
        id: 3,
        name: "Red 3",
        image: "https://via.placeholder.com/50",
        width: 50,
        height: 50,
        side: SIDES.Red,
        position: { x: 0, y: 200 },
      },
    ],
    blue: [
      {
        id: 4,
        name: "Blue 4",
        image: "https://via.placeholder.com/50",
        width: 50,
        height: 50,
        side: SIDES.Blue,
        position: { x: 50, y: 50 },
      },
      {
        id: 5,
        name: "Blue 5",
        image: "https://via.placeholder.com/50",
        width: 50,
        height: 50,
        side: SIDES.Blue,
        position: { x: 50, y: 150 },
      },
    ],
    neutral: [],
  },
  markers: [
    {
      id: 1,
      position: { x: 100, y: 100 },
      type: "Objective",
    },
  ],
  terrain: [
    {
      id: 1,
      name: "Terrain 1",
      image: "https://via.placeholder.com/250",
      width: 250,
      height: 250,
      position: { x: 300, y: 300 },
      rotation: 45,
    },
  ],
};

export default ScenarioOneSetup;
