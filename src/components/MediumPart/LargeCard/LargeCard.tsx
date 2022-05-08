import "./LargeCard.css";

interface Props {
  name: string;
  members: string;
  modified: string;
  color: string;
}

export function LargeCard(props: Props) {
  return (
    <div className="large-card-container">
      <div className="left-side-card">
        <div
          className="large-card-square"
          style={{ background: props.color }}
        ></div>
        <span className="large-card-title">{props.name}</span>
      </div>

      <div className="right-side-card">
        <div className="large-card-members">{props.members}</div>
        <div className="large-card-modified">{props.modified}</div>
        <div className="large-card-dots">
          <div className="horizontal-dot"></div>
          <div className="horizontal-dot"></div>
          <div className="horizontal-dot"></div>
        </div>
      </div>
    </div>
  );
}
