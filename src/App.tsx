// Genady Kogan
import React, { ReactElement, useState } from "react";
import Home from "./components/Home/Home";
import { ThemeProvider } from "styled-components";
import themes from "./themes";
import Theme from "./models/Theme";

import TeamWindow from "./components/Menus/TopMenu/Window/TeamWindow";




const App: React.FC<{}> = (): ReactElement => {
  /*
  ThemeProvider - a helper component for theming.
  Injects the theme into all styled components
   anywhere beneath it in the component tree,
  via the context API.
  */
  const [globalTheme, setGlobalTheme] = useState<Theme>(themes.light);
  const [isWindowVisible, setWindowVisible] = useState<boolean>(true);

  const onWindowExit = () => {
    setWindowVisible(false);
  };
  const onWindowOpen = () => {
    setWindowVisible(true);
  };
  return (
    <ThemeProvider theme={globalTheme}>
      <Home changeTheme={setGlobalTheme} onTeamClick={onWindowOpen}></Home>
      <TeamWindow isVisible={isWindowVisible} onExit={onWindowExit}></TeamWindow>
    </ThemeProvider>
  );
};

export default App;
