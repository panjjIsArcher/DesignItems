import { useCallback, useState } from "react";
import CardStyle from "../../assets/card.module.scss";
import G_Card from "./components/GloabalCard";
import { cards } from "../../mock/database";
import { CARD_LI } from "../../type/card";
function Tools() {
  const [name, setName] = useState("");
  const [curBtnItem, setCurBtnItem] = useState<CARD_LI>({
    name: "",
    className: "",
    text: "BUTTON",
  });
  const changeName = useCallback((val: string) => {
    setName(val);
  }, []);

  const [list, setList] = useState<CARD_LI[]>([]);
  const fetchList = async () => {
    const data = await cards;
    setList(data);
  };
  const changeStyle = (btnItem: CARD_LI) => {
    setCurBtnItem(btnItem);
  };
  fetchList();
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
        <ul className={CardStyle.list}>
          {list.map((c) => (
            <li
              key={c.name}
              className={CardStyle["card-tab"]}
              onClick={() => changeStyle(c)}
            >
              <div
                className={`${CardStyle.card} card-common-style ${c.className}`}
              >
                {c.name}
              </div>
            </li>
          ))}
        </ul>
        <div className={CardStyle.screen}>
          <G_Card curBtnItem={curBtnItem} />
        </div>
      </div>
    </div>
  );
}

export default Tools;
