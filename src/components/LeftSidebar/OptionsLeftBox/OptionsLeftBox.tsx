import { NavOptionInBox } from "../NavOptionInBox/NavOptionInBox";
import "./OptionsLeftBox.css";

export function OptionsLeftBox() {
  const options = [
    { name: "Upload Files" },
    { name: "Upload Folder" },
    { name: "New Folder" },
    { name: "More" },
  ];

  return (
    <div className="options-left-box">
      {options.map((option) => (
        <NavOptionInBox name={option.name}></NavOptionInBox>
      ))}
    </div>
  );
}
