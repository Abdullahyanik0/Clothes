import React, { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";

const ToggleButton = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const onClick = () => {
    darkMode
      ? theme.dispatch({ type: "LIGHTMODE" })
      : theme.dispatch({ type: "DARKMODE" });
  };

  return (
    <div
      onClick={onClick}
      className={`toggle ${darkMode ? "toggle-checked" : ""} block`}
    >
      <div
        style={{
          backgroundImage: `${
            darkMode
              ? `url("https://i.pinimg.com/originals/a1/01/e2/a101e22fc458c1110d418ee309f240c8.png")`
              : `url("https://www.freepnglogos.com/uploads/sun-png/sun-day-rays-sun-image-pixabay-35.png")`
          }`,
        }}
        className="w-6 h-6  bg-cover"
      ></div>
    </div>
  );
};

export default ToggleButton;
