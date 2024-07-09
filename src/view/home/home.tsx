import HomeStyle from "../../assets/home.module.scss";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../config/router";
function Home() {
  const navigate = useNavigate();
  const jump = (path: string): void => {
    navigate(path, { state: 1 });
  };
  return (
    <div className={HomeStyle.container}>
      <ul className={HomeStyle["card-list"]}>
        {ROUTES.map((r) => {
          return (
            <li key={r.url} onClick={() => jump(`/${r.url}?type=${r.type}`)}>
              {r.component()}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Home;
