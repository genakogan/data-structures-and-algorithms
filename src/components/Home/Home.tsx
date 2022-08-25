import React, { ReactElement } from "react";
import BottomMenu from "../BottomMenu/BottomMenu";
import TopMenu from "../TopMenu/TopMenu";

interface HomeProps {
  changeTheme: Function;
  onTeamClick: () => void;
}

const Home: React.FC<HomeProps> = (props: HomeProps): ReactElement => {
  return (
    <div>
      <TopMenu
        changeTheme={props.changeTheme}
        onTeamClick={props.onTeamClick}
      ></TopMenu>
      <BottomMenu></BottomMenu>
    </div>
  );
};

export default Home;
