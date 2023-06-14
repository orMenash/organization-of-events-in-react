import "./Chat.css";

export default function Chat2(props) {
  return (
    <div className="Chat2">
      <div className="container2 darker">
        <p className="fromName">{props.from}</p>
        <p className="fromName">{props.text}</p>
        <span className="time-left">{props.time.slice(11, 19)}</span>
      </div>
    </div>
  );
}
