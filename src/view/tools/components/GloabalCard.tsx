import { CARD_LI } from "../../../type/card";

function G_Card(props: { curBtnItem: CARD_LI }) {
  const { curBtnItem } = props;
  return <div>{curBtnItem.name}</div>;
}

export default G_Card;
