import { BoxConfig } from "../../types/type";

const cameraConfig = {
  position: { x: 0, z: 5, y: 0 },
  fov: 75,
  near: 0.1,
  far: 1000,
};

const boxGeoConfig: BoxConfig[] = [{ name: "left-top" }];

export { cameraConfig, boxGeoConfig };
