import ATTRIBUTES from "../types/attributes";

type Stats = {
  nationality: string;
  type: string;
  speed: number;
  melee: number;
  accuracy: number;
  defense: number;
  courage: number;
  health: number;
  recrutment: number;
  attributes: ATTRIBUTES[];
};

export default Stats;
