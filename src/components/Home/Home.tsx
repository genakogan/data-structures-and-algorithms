// Genady Kogan
import React, { ReactElement, useState} from "react";
import BottomMenu from "../Menus/BottomMenu/BottomMenu";
import Column from "../Common/Column";
import LeftMenu from "../Menus/LeftMenu/LeftMenu";
import RightMenuContainer from "../Menus/RightMenu/RightMenuContainer";
import TopMenu from "../Menus/TopMenu/TopMenu";
import Canvas from "../Canvas/Canvas";

interface HomeProps {
  changeTheme: Function;
  onTeamClick: () => void;
}

const Home: React.FC<HomeProps> = (props: HomeProps): ReactElement => {
  const [zoomPercentage, setZoomPercentage] = useState<number>(1);
  return (
    <div>
      
      <TopMenu
        changeTheme={props.changeTheme}
        onTeamClick={props.onTeamClick}
      ></TopMenu>
      <LeftMenu></LeftMenu>
      <Canvas></Canvas>
      <RightMenuContainer></RightMenuContainer>
      
      <BottomMenu
       setZoomPercentage={setZoomPercentage}
       zoomPercentage={zoomPercentage} 
      ></BottomMenu>
    </div>
  );
};

export default Home;
