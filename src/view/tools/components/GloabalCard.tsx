import { CARD_LI } from "../../../type/card";

function G_Card(props: { curBtnItem: CARD_LI }) {
  const { curBtnItem } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "20vw",
          height: "8vw",
          lineHeight: "8vw",
        }}
        className={`${curBtnItem.className} card-common-style`}
      >
        {curBtnItem.text}
      </div>
    </div>
  );
}

export default G_Card;
