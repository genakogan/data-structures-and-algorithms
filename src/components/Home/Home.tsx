// Genady Kogan
import React, { ReactElement } from "react";
import BottomMenu from "../BottomMenu/BottomMenu";
import Column from "../Common/Column";
import LeftMenu from "../LeftMenu/LeftMenu";
import RightMenuContainer from "../RightMenu/RightMenuContainer";
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
      <LeftMenu></LeftMenu>
      <RightMenuContainer></RightMenuContainer>
      
      <BottomMenu></BottomMenu>
    </div>
  );
};

export default Home;
