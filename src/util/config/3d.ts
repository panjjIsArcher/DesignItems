import { BoxConfig } from "../../types/type";

const cameraConfig = {
  position: { x: 0, z: 4.5, y: 0.1 },
  fov: 60,
  near: 1,
  far: 1000,
};

const boxGeoConfig: BoxConfig[] = [
  { name: "left-top", position: { x: -1, z: 0, y: 1 } },
  { name: "right-top", position: { x: 1, z: 0, y: 1 } },
  { name: "left-bottom", position: { x: 1, z: 0, y: -1 } },
  { name: "right-bottom", position: { x: -1, z: 0, y: -1 } },
];

export { cameraConfig, boxGeoConfig };
