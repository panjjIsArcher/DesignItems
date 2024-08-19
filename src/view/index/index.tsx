import { useEffect, useState } from "react";
import IndexStyle from "../../assets/css/index.module.scss";
import init from "../../util/init";
import MyContext from "../../util/provider";
import Box from "../../components/box";
import { boxGeoConfig } from "../../util/config/3d";
export default function Index() {
  const [gScreen, setGScrren] = useState(null);
  const [gCamera, setGCamera] = useState(null);
  const [gRenderer, setGRenderer] = useState(null);
  useEffect(() => {
    const options = init("container");
    if (!options) return;
    setGScrren(options.scene);
    setGRenderer(options.renderer);
    setGCamera(options.camera);
  }, []);

  return (
    <div className={IndexStyle.layout} id="container">
      <MyContext.Provider
        value={{
          camera: gCamera,
          renderer: gRenderer,
          scene: gScreen,
        }}
      >
        {boxGeoConfig.map((config) => {
          return <Box key={config.name} config={config} />;
        })}
      </MyContext.Provider>
    </div>
  );
}
