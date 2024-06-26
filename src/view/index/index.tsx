import IndexStyle from "../../assets/index.module.scss";
import { Link, Routes, Route } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import Home from "../home/home";
import { FaRegMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import {
  getThemeMap,
  setTheme as setGlobalTheme,
  THEME,
} from "../../util/skin";

function Index() {
  const [theme, setTheme] = useState(getThemeMap());
  console.log("theme", theme);

  // // mounted
  // useEffect(() => {

  // }, []);

  const switchTheme = (isLight: boolean) => {
    setTheme(isLight ? THEME.DARK : THEME.LIGHT);
    setGlobalTheme(!isLight);
  };

  return (
    <Fragment>
      <ul className={IndexStyle.nav}>
        <li>
          <Link to="/">Button</Link>
        </li>
      </ul>
      <div
        className={`${IndexStyle.icons}  ${
          theme === THEME.LIGHT ? IndexStyle["icon-light"] : ["icon-dark"]
        }`}
      >
        {theme === THEME.LIGHT ? (
          <FaRegMoon onClick={() => switchTheme(true)} />
        ) : (
          <LuSun onClick={() => switchTheme(false)} />
        )}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Fragment>
  );
}

export default Index;
