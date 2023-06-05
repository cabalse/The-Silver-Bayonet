import { ReactElement, createElement } from "react";
import ScenariosSetup from "../../data/scenariossetup";
import Position from "../../models/position";
import TerrainPiece from "../atoms/terrainpiece";

type CreateTerrainPiecesProps = {
  scenarioName?: string;
};

const CreateTerrainPieces = ({ scenarioName }: CreateTerrainPiecesProps) => {
  if (!scenarioName) return <></>;

  const scenarioSetup = ScenariosSetup.find((s) => s.name === scenarioName);
  if (!scenarioSetup) return <></>;

  const createTerrainPiecesElement = (
    id: number,
    image: string,
    position: Position,
    rotation: number,
    width: number,
    height: number
  ) => {
    return createElement(TerrainPiece, {
      id: id,
      image: image,
      position: position,
      rotation: rotation,
      width: width,
      height: height,
    });
  };

  const ret: ReactElement[] = [];

  scenarioSetup?.terrain.map((tp) => {
    ret.push(
      createTerrainPiecesElement(
        tp.id,
        tp.image,
        tp.position,
        tp.rotation,
        tp.width,
        tp.height
      )
    );
  });

  return <>{ret}</>;
};

export default CreateTerrainPieces;
