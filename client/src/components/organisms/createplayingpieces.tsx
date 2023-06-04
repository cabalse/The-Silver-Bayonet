import { ReactElement, createElement } from "react";
import ScenarioOneSetup from "../../data/scenarioonesetup";
import PlayingPiece from "../atoms/playingpiece";
import Scenario from "../../models/scenario";

type CreatePlayingPiecesProps = {
  scenarioName: string;
  redoMove: { redoMovement: boolean; currentSelectedUnit: number };
  onRedoMovementDone: () => void;
  unSelect: { unSelect: boolean; currentSelectedUnit: number };
  onSelect: (id: number) => void;
  onUnSelectDone: () => void;
};

const scenariosSetup: Scenario[] = [ScenarioOneSetup];

const CreatePlayingPieces = ({
  scenarioName,
  redoMove,
  onRedoMovementDone,
  unSelect,
  onSelect,
  onUnSelectDone,
}: CreatePlayingPiecesProps) => {
  const scenarioSetup = scenariosSetup.find((s) => s.name === scenarioName);

  if (!scenarioSetup) return <></>;

  const ret: ReactElement[] = [];

  scenarioSetup.playingPieces.red.map((pp) => {
    const element = createElement(PlayingPiece, {
      id: pp.id,
      image: pp.image,
      startPos: pp.position,
      borderColor: "red",
      redoMove: redoMove.redoMovement && redoMove.currentSelectedUnit === pp.id,
      onSelect: () => onSelect(pp.id),
      unSelect: unSelect.unSelect && unSelect.currentSelectedUnit != pp.id,
      onUnSelectDone: onUnSelectDone,
      onRedoMovementDone: onRedoMovementDone,
    });
    ret.push(element);
  });

  scenarioSetup.playingPieces.blue.map((pp) => {
    const element = createElement(PlayingPiece, {
      id: pp.id,
      image: pp.image,
      startPos: pp.position,
      borderColor: "blue",
      redoMove: redoMove.redoMovement && redoMove.currentSelectedUnit === pp.id,
      onSelect: () => onSelect(pp.id),
      unSelect: unSelect.unSelect && unSelect.currentSelectedUnit != pp.id,
      onUnSelectDone: onUnSelectDone,
      onRedoMovementDone: onRedoMovementDone,
    });
    ret.push(element);
  });

  scenarioSetup.playingPieces.neutral.map((pp) => {
    const element = createElement(PlayingPiece, {
      id: pp.id,
      image: pp.image,
      startPos: pp.position,
      borderColor: "grey",
      redoMove: redoMove.redoMovement && redoMove.currentSelectedUnit === pp.id,
      onSelect: () => onSelect(pp.id),
      unSelect: unSelect.unSelect && unSelect.currentSelectedUnit != pp.id,
      onUnSelectDone: onUnSelectDone,
      onRedoMovementDone: onRedoMovementDone,
    });
    ret.push(element);
  });

  return <>{ret}</>;
};

export default CreatePlayingPieces;
