import IndexStyle from "../../assets/index.module.scss";
import { Link, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import Home from "../home/home";
function Index() {
  return (
    <Fragment>
      <ul className={IndexStyle.nav}>
        <li>
          <Link to="/">Button</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Fragment>
  );
}

export default Index;
