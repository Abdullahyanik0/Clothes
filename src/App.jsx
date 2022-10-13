import React, { useContext, useEffect } from "react";
import Routing from "Routing";
import { ThemeContext } from "context/ThemeContext";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const isActive = () => {
    const body = document.body.style;
    darkMode
      ? (body.backgroundColor = "#212222")
      : (body.backgroundColor = "#f5f5f5");
    darkMode ? (body.color = "#f5f5f5") : (body.color = "#212222");
   
  };

  useEffect(() => {
    isActive();
  }, [darkMode]);
  return <Routing />;
};

export default App;
