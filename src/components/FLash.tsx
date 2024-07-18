interface FLASH {
  text: string;
}

export default function Flash(props: FLASH = { text: "BUTTON" }) {
  return (
    <div className="card-common-style _flash">
      <span className="btn-text"> {props.text}</span>
    </div>
  );
}
