interface SPREAD {
  text: string;
}
export default function Spread(props: SPREAD = { text: "BUTTON" }) {
  return (
    <div className="card-common-style _spread">
      <span className="btn-text">{props.text}</span>
    </div>
  );
}
