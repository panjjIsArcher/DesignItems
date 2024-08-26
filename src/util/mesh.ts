import * as Three from "three";
const { Mesh } = Three;
const updatePosition = (
  mesh,
  position: {
    x: number;
    y: number;
    z: number;
  }
) => {
  mesh.position.x = position.x;
  mesh.position.y = position.y;
  mesh.position.z = position.z;
};

const updateRotation = (
  mesh,
  rotation: {
    x: number;
    y: number;
    z: number;
  }
) => {
  mesh.rotation.x = rotation.x;
  mesh.rotation.y = rotation.y;
  mesh.rotation.z = rotation.z;
};

export { updatePosition, updateRotation };
