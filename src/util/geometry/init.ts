import * as Three from "three";
const { BoxGeometry, MeshBasicMaterial, Mesh, BoxHelper } = Three;

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

const initBoxHelper = (object: unknown) => {
  const box = new BoxHelper(object, 0xffff00);
  return box;
};

export { initBoxGeometry, initBoxHelper };
