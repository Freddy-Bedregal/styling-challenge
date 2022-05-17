import "./Header.css";

export function Header() {
  return (
    <div className="header-container">
      <div className="header-left">
        <div className="gray-square"/>
        <div className="gray-square"/>
      </div>

      <div className="header-right">
        <span className="header-text">Freddy</span>
        <div className="gray-circle"/>
      </div>
    </div>
  );
}
