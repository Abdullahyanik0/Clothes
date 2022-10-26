import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Routing from "Routing";

const ColorModeContext = React.createContext({ App: () => {} });

const App = () => {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      App: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Routing />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
export default App;
