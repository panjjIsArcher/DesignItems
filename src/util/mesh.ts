import * as Three from "three";
const { Mesh } = Three;
const updatePosition = (mesh, position) => {
  mesh.position.x = position.x;
  mesh.position.y = position.y;
  mesh.position.z = position.z;
};

export { updatePosition };
