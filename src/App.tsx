import AppStyle from "./assets/App.module.scss";
import "./assets/effect.scss";
import IndexPage from "./view/index/index";
import { useEffect, useState } from "react";
import { setTheme as setGlobalTheme } from "./util/skin";
import init from "./util/init.ts";
// 初始化数据库
const defaultDB = "demo";

function App() {
  // 默认主题是light
  const [theme] = useState<string>("light");
  setGlobalTheme(theme === "light");
  const [dbOpen, setDbOpen] = useState(false);

  useEffect(() => {
    // 初始化 indexedDB 并在成功打开后设置状态
    const initIndexedDB = async () => {
      try {
        await init(defaultDB);
        setDbOpen(true);
      } catch (error) {
        console.error("Error opening indexedDB:", error);
        setDbOpen(false);
      }
    };
    initIndexedDB();
  }, []);
  return !dbOpen ? (
    <div>打开中……</div>
  ) : (
    <div className={AppStyle.index}>
      <IndexPage />
    </div>
  );
}

export default App;
