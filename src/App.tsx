import "./App.css";
import React, { ReactElement, useState } from "react";
import Home from "./components/Home/Home";
import { ThemeProvider } from "styled-components";
import themes from "./themes";

const App: React.FC<{}> = (): ReactElement => {
  /*
  ThemeProvider - a helper component for theming.
  Injects the theme into all styled components
   anywhere beneath it in the component tree,
  via the context API.
  */
  const [globalTheme, setGlobalTheme] = useState<string>("dark");

  {/*<Home toggleTheme={setGlobalTheme}  ></Home>*/}
  return (
    <ThemeProvider theme={globalTheme === "dark" ? themes.dark : themes.light}>
      <Home  ></Home>
    </ThemeProvider>
  );
};

export default App;
