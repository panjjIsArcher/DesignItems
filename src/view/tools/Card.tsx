import { useCallback, useState } from "react";
import CardStyle from "../../assets/card.module.scss";
function Card() {
  const [name, setName] = useState("");
  const changeName = useCallback((val: string, preVal: string) => {
    setName(val);
  }, []);
  return (
    <div className={CardStyle.container}>
      <div className={CardStyle.form}>
        <input
          className={CardStyle.input}
          onChange={(e) => changeName(e.target.value, name)}
          value={name}
        />
      </div>
      <ul className={CardStyle.list}></ul>
    </div>
  );
}

export default Card;
