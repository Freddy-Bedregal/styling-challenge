import "./CardBig.css";

interface Props {
  title: string;
  date: string;
}

export function CardBig(props: Props) {
  return (
    <div className="card-big-container">
      <div className="row-icons">
        <div className="orange-square-shadow"/>
        <div className="orange-square"/>
        <div className="circle1"/>
        <div className="circle2"/>
        <div className="circle3"/>

        <div className="big-card-dots">
          <div className="vertical-dot"/>
          <div className="vertical-dot"/>
          <div className="vertical-dot"/>
        </div>
      </div>

      <span className="card-title">{props.title}</span>
      <span className="card-detail">{props.date}</span>
    </div>
  );
}
