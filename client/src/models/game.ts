import Scenario from "./scenario";

type Game = {
  name: string;
  startTime: Date;
  endTime: Date;
  scenario: Scenario;
  turn: number;
  bluePlayer: string;
  redPlayer: string;
  bluePlayerScore: number;
  redPlayerScore: number;
};

export default Game;
