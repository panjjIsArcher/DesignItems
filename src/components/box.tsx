import { useContext } from "react";
import MyContext from "../util/provider";
import { initBoxGeometry, initBoxHelper } from "../util/geometry/init";
import { BoxConfig } from "../types/type";
import { updatePosition } from "../util/mesh";
function Box(props: { config: BoxConfig }) {
  const context = useContext(MyContext);
  // 初始化长方形
  const getThreeJs = context;
  const scene = getThreeJs.scene;
  if (scene) {
    const boxGeometry = initBoxGeometry(1, 1, 0.03);
    updatePosition(boxGeometry, props.config.position); // 初始化位置

    updateRotation(boxGeometry, props.config.rotation); //初始化rotate
    scene.add(boxGeometry);
    scene.add(initBoxHelper(boxGeometry));
    console.log(boxGeometry);
  }

  return;
}

export default Box;
