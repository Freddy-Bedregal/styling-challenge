import "./NavOption.css";

interface Props {
  name: string;
}

export function NavOption(props: Props) {
  return (
    <div className="nav-option">
      <div className="square-option"/>
      <span className="option-name">{props.name}</span>
    </div>
  );
}
