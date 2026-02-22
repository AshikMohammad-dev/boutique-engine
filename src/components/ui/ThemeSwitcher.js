import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { THEMES } from "../../config/themes";

const DEV_MODE = true;

function ThemeSwitcher() {
  const { setTheme } = useContext(ThemeContext);

  if (!DEV_MODE) return null;

  return (
    <div style={{
      position: "fixed",
      top: "20px",
      right: "20px",
      zIndex: 9999
    }}>
      <select onChange={(e) => setTheme(THEMES[e.target.value])}>
        {Object.keys(THEMES).map(key => (
          <option key={key} value={key}>
            {THEMES[key].name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ThemeSwitcher;