import HomeStyle from "../../assets/home.module.scss";
import Card from "../../components/Card";
function Home() {
  return (
    <div className={HomeStyle.container}>
      <ul className={HomeStyle['card-list']}>
        <li>
          <Card />
        </li>
      </ul>
    </div>
  );
}
export default Home;
