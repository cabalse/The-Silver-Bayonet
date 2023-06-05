import { ReactElement, createElement } from "react";
import PlayingPiece from "../atoms/playingpiece";
import Position from "../../models/position";
import scenariosSetup from "../../data/scenariossetup";

type CreatePlayingPiecesProps = {
  scenarioName?: string;
  redoMove: { redoMovement: boolean; currentSelectedUnit: number };
  onRedoMovementDone: () => void;
  unSelect: { unSelect: boolean; currentSelectedUnit: number };
  onSelect: (id: number) => void;
  onUnSelectDone: () => void;
};

const CreatePlayingPieces = ({
  scenarioName,
  redoMove,
  onRedoMovementDone,
  unSelect,
  onSelect,
  onUnSelectDone,
}: CreatePlayingPiecesProps) => {
  if (!scenarioName) return <></>;

  const scenarioSetup = scenariosSetup.find((s) => s.name === scenarioName);
  if (!scenarioSetup) return <></>;

  const createPlayingPiecesElement = (
    id: number,
    image: string,
    position: Position,
    color: string
  ) => {
    return createElement(PlayingPiece, {
      id: id,
      image: image,
      startPos: position,
      borderColor: color,
      redoMove: redoMove.redoMovement && redoMove.currentSelectedUnit === id,
      onSelect: () => onSelect(id),
      unSelect: unSelect.unSelect && unSelect.currentSelectedUnit != id,
      onUnSelectDone: onUnSelectDone,
      onRedoMovementDone: onRedoMovementDone,
    });
  };

  const ret: ReactElement[] = [];

  scenarioSetup.playingPieces.red.map((pp) => {
    ret.push(createPlayingPiecesElement(pp.id, pp.image, pp.position, "red"));
  });

  scenarioSetup.playingPieces.blue.map((pp) => {
    ret.push(createPlayingPiecesElement(pp.id, pp.image, pp.position, "blue"));
  });

  scenarioSetup.playingPieces.neutral.map((pp) => {
    ret.push(createPlayingPiecesElement(pp.id, pp.image, pp.position, "grey"));
  });

  return <>{ret}</>;
};

export default CreatePlayingPieces;
