import "./CardBig.css";

interface Props {
  title: string;
  date: string;
}

export function CardBig(props: Props) {
  return (
    <div className="card-big-container">
      <div className="row-icons">
        <div className="orange-square-shadow"></div>
        <div className="orange-square"></div>
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>

        <div className="big-card-dots">
          <div className="vertical-dot"></div>
          <div className="vertical-dot"></div>
          <div className="vertical-dot"></div>
        </div>
      </div>

      <span className="card-title">{props.title}</span>
      <span className="card-detail">{props.date}</span>
    </div>
  );
}
