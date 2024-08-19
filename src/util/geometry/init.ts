import * as Three from "three";
const { BoxGeometry, MeshBasicMaterial, Mesh } = Three;

const initBoxGeometry = (
  width: number = 1,
  height: number = 1,
  depth: number = 1,
  color: number = 0xffffff
) => {
  return new Mesh(
    new BoxGeometry(width, height, depth),
    new MeshBasicMaterial({ color })
  );
};

export { initBoxGeometry };
