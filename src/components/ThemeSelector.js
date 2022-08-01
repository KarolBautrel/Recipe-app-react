import useTheme from "../hooks/useTheme";
import modeIcon from "../assets/mode-icon.svg";
import "./ThemeSelector.css";
export default function ThemeSelector() {
  const colors = ["rgb(88, 36, 156)", "rgb(	36,156,107)", "rgb(183,2,51"];
  const { changeColor, changeMode, mode } = useTheme();

  const handleChangeMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
    console.log(mode);
  };

  return (
    <div className="mode-selector">
      <div>
        <img
          className="mode-selector-btn"
          src={modeIcon}
          onClick={handleChangeMode}
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
        />
      </div>

      {colors.map((color) => (
        <button
          className="theme-switch-btn"
          id={color}
          key={color}
          value={color}
          style={{ backgroundColor: color }}
          onClick={() => {
            changeColor(color);
          }}
        ></button>
      ))}
    </div>
  );
}
