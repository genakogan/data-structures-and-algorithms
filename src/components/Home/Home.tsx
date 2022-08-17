import React, { ReactElement } from "react";
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
    </div>
  );
};

export default Home;
