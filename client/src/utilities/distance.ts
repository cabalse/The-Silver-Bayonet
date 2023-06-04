import SETTINGS from "../settings";

const distance = (x: number, y: number, toX: number, toY: number) => {
  return Math.sqrt(Math.pow(toX - x, 2) + Math.pow(toY - y, 2));
};

const distanceInInches = (x: number, y: number, toX: number, toY: number) => {
  return Math.trunc(distance(x, y, toX, toY) / SETTINGS.PIXELS_PER_INCH) + 1;
};

export { distance, distanceInInches };
