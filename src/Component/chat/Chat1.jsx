import "./Chat.css";

export default function Chat1(props) {
  return (
    <div className="Chat1">
      <div className="container2 ">
        <p className="fromName2">{props.from}</p>
        <p className="fromName2">{props.text}</p>
        <span className="time-left">{props.time.slice(11, 19)}</span>
      </div>
    </div>
  );
}
