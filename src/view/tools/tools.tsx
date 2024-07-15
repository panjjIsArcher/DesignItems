import { useCallback, useState } from "react";
import CardStyle from "../../assets/card.module.scss";
function Tools() {
  const [name, setName] = useState("");
  const changeName = useCallback((val: string) => {
    setName(val);
  }, []);
  return (
    <div className={CardStyle.container}>
      <div className={CardStyle.form}>
        <input
          className={CardStyle.input}
          onChange={(e) => changeName(e.target.value)}
          value={name}
        />
      </div>
      <div className={CardStyle.middle}>
        <ul className={CardStyle.list}></ul>
        <div className={CardStyle.screen}></div>
      </div>
    </div>
  );
}

export default Tools;
