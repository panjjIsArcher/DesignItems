import * as Three from "three";
import { cameraConfig } from "./config/3d";
const { Scene, PerspectiveCamera, WebGLRenderer } = Three;
let _scene = null,
  _camera = null,
  _renderer = null;

const init = function (elementId: string) {
  const el = document.querySelector(`#${elementId}`);
  if (!el) {
    return;
  }

  const scene = new Scene();
  // 初始化camera
  const camera = initCamera(cameraConfig, el.clientWidth / el.clientHeight);
  const renderer = new WebGLRenderer();
  renderer.setSize(el.clientWidth, el.clientHeight);
  el.appendChild(renderer.domElement);
  _scene = scene;
  _camera = camera;
  _renderer = renderer;
  animationFrame();
  return { scene, camera, renderer };
};

const animationFrame = () => {
  requestAnimationFrame(animationFrame);
  _renderer.render(_scene, _camera);
};

const initCamera = function (
  cameraConfig: {
    position: unknown;
    fov: unknown;
    near?: number;
    far: unknown;
  },
  aspect: number
) {
  const camera = new PerspectiveCamera();
  camera.fov = cameraConfig.fov;
  camera.far = cameraConfig.far;
  camera.position.z = cameraConfig.position.z;
  camera.aspect = aspect;
  return camera;
};

export default init;
