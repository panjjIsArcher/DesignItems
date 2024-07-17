import AppStyle from "./assets/App.module.scss";
import "./assets/effect.scss";
import IndexPage from "./view/index/index";
import { useState } from "react";
import { setTheme as setGlobalTheme } from "./util/skin";
import IndexedDB from "./indexedDB/indexedDB";
function App() {
  // 默认主题是light
  const [theme] = useState<string>("light");
  setGlobalTheme(theme === "light");
  new IndexedDB("demo");
  return (
    <div className={AppStyle.index}>
      <IndexPage />
    </div>
  );
}

export default App;
