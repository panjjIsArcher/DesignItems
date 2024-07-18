import { useCallback, useEffect, useState } from "react";
import CardStyle from "../../assets/card.module.scss";
import G_Card from "./components/GloabalCard";
import { CARD_LI } from "../../type/card";
import { register } from "./register";
import $request from "../../api/request";
function Tools() {
  const [name, setName] = useState("");
  const [curBtnItem, setCurBtnItem] = useState<CARD_LI>({
    type: "",
    className: "",
    text: "BUTTON",
    component: <div></div>,
  });
  const changeName = useCallback((val: string) => {
    setName(val);
  }, []);

  const [list, setList] = useState<CARD_LI[]>([]);
  const fetchList = async () => {
    const data = await $request("queryCards");
    // 动态去注册组件
    const completeData: CARD_LI[] = data.map((itemConfig) => {
      return { ...itemConfig, component: register(itemConfig.type) };
    });
    setList(
      completeData.filter((card) => {
        return card.type.indexOf(name) > -1;
      })
    );
  };

  const changeStyle = (btnItem: CARD_LI) => {
    setCurBtnItem(btnItem);
  };

  // mounted阶段
  useEffect(() => {
    fetchList();
  }, []);

  // 监听name的变化
  useEffect(() => {
    fetchList();
  }, [name]);
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
              key={c.type}
              className={CardStyle["card-tab"]}
              onClick={() => changeStyle(c)}
            >
              {c.type}
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
