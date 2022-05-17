import "./SmallCard.css";

interface Props {
  title: string;
}

export function SmallCard(props: Props) {
  return (
    <div className="card-small-container">
      <div className="card-small-row-icons">
        <div className="card-small-orange-square"/>
        <div className="card-small-circle1"/>
        <div className="card-small-circle2"/>
      </div>

      <span className="card-small-title">{props.title}</span>
      <span className="card-small-detail">Created: 20.02.2020</span>
    </div>
  );
}
