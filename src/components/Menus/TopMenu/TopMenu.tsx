// Genady Kogan
import React, { ReactElement } from "react";
import TopMenuContainer from "./TopMenuContainer";
import Row from "../../Common/Row";
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch";
import Slider from "../../Common/Slider";
import TopMenuContentText from "./TopMenuContentText";

interface TopMenuProps {
  changeTheme: Function;
  onTeamClick: () => void;
  setZoomPercentage: Function;
  zoomPercentage: number;
}
const onAboutClick = () => {
  alert("About");
};

const onHelpClick = () => {
  alert("Help");
};

const TopMenu: React.FC<TopMenuProps> = (props: TopMenuProps): ReactElement => {
  return (
    <TopMenuContainer>
      <Row justifyContent="space-between" margin="0 40px">
        <ThemeSwitch changeTheme={props.changeTheme}></ThemeSwitch>
        <TopMenuContentText
          fontSize="30px"
          underline=""
          cursor=""
          marginLeft="20px"
          marginRight="20px"
        >
          AVDS
        </TopMenuContentText>
      </Row>
      <Row justifyContent="space-between" margin="0 35px">
        <TopMenuContentText
          fontSize="15px"
          underline=""
          cursor=""
          marginLeft="20px"
          marginRight="-25px"
        >
          Zoom
        </TopMenuContentText>

        <Row justifyContent="space-between" margin="0px 30px">
          <Slider width="200px" paddingRight ='10px'>
            <input
              type="range"
              className="slider"
              min={0.5}
              max={1.5}
              step={0.1}
              value={props.zoomPercentage}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              props.setZoomPercentage(e.target.value)}
            />
          </Slider>
        </Row>
        <TopMenuContentText
          fontSize="15px"
          underline="text-decoration: underline"
          cursor="pointer"
          marginLeft="20px"
          marginRight="20px"
          onClick={() => onHelpClick()}
        >
          Help
        </TopMenuContentText>
        <TopMenuContentText
          fontSize="15px"
          underline="text-decoration: underline"
          cursor="pointer"
          marginLeft="20px"
          marginRight="20px"
          onClick={() => props.onTeamClick()}
        >
          Team
        </TopMenuContentText>
        <TopMenuContentText
          fontSize="15px"
          underline="text-decoration: underline"
          cursor="pointer"
          marginLeft="20px"
          marginRight="20px"
          onClick={() => onAboutClick()}
        >
          About
        </TopMenuContentText>
        <TopMenuContentText
          fontSize="15px"
          underline="text-decoration: underline"
          cursor="pointer"
          marginLeft="20px"
          marginRight="20px"
          onClick={() => onAboutClick()}
        >
          Sign in
        </TopMenuContentText>
      </Row>
    </TopMenuContainer>
  );
};

export default TopMenu;
