import { useEffect } from "react";
import IndexStyle from "../../assets/css/index.module.scss";
import init from "../../util/init";
export default function Index() {
  useEffect(() => {
    const options = init("container");
    if (!options) {
      return;
    }
    const { scene, camera, renderer } = options;
  }, []);
  return <div className={IndexStyle.layout} id="container"></div>;
}
