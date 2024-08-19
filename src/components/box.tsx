import { useContext } from "react";
import MyContext from "../util/provider";
import { initBoxGeometry } from "../util/geometry/init";
function Box() {
  const context = useContext(MyContext);
  // 初始化长方形
  const getThreeJs = context;
  const scene = getThreeJs.scene;
  if (scene) {
    const boxGeometry = initBoxGeometry(1, 1, 1);
    scene.add(boxGeometry);
  }

  return <div>测试</div>;
}

export default Box;
