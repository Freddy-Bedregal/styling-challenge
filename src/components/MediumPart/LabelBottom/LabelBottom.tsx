import "./LabelBottom.css";

interface Props {
  name: string;
}

export function LabelBottom(props: Props) {
  return (
    <div className="label-bottom-container">
      <span className="left-text-bottom">{props.name}</span>
      <span className="right-text-bottom">View All</span>
    </div>
  );
}
