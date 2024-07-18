import "../assets/vari.scss";

interface PETANCE {
  text: string;
  subText: string;
  backgroundColor?: string;
}

export default function Petanca(
  props: PETANCE = { text: "UP", subText: "DOWN" }
) {
  const { text, subText, backgroundColor } = props;
  let style = {};
  if (backgroundColor) {
    style = { backgroundColor };
  }
  return (
    <div className="card-common-style _petance">
      <span data-position="up">{text}</span>
      <span data-position="down" style={style}>
        {subText}
      </span>
    </div>
  );
}
