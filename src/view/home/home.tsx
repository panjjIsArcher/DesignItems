import HomeStyle from "../../assets/home.module.scss";
import Card from "../../components/Card";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const jump = (path: string): void => {
    navigate(path, { state: 1 });
  };
  return (
    <div className={HomeStyle.container}>
      <ul className={HomeStyle["card-list"]}>
        <li onClick={() => jump("/card")}>
          <Card />
        </li>
      </ul>
    </div>
  );
}
export default Home;
