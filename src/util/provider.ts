import { createContext } from "react";
import * as Three from "three";
const { Scene, PerspectiveCamera, WebGLRenderer } = Three;
export default createContext({
  scene: Scene,
  camera: PerspectiveCamera,
  renderer: WebGLRenderer,
});
