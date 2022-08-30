// Genady Kogan
import React, { ReactElement } from "react";
import TopMenuContainer from "./TopMenuContainer";
import Row from "../../Common/Row";
import Titles from "../../Common/Titles";
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch";
import Slider from "../../Common/Slider";

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
        <Titles
          fontSize="24px"
          underline=""
          cursor=""
          userSelect="none"
          marginLeft="20px"
          marginRight="20px"
        >
          AVDS
        </Titles>
      </Row>
      <Row justifyContent="space-between" margin="0 35px">
        <Titles
          fontSize="15px"
          underline=""
          cursor=""
          userSelect=""
          marginLeft="20px"
          marginRight="-20px"
        >
          Zoom
        </Titles>

        <Row justifyContent="space-between" margin="0px 30px">
          <Slider width="200px">
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
        <Titles
          fontSize="15px"
          underline="text-decoration: underline"
          cursor="pointer"
          userSelect=""
          marginLeft="20px"
          marginRight="20px"
          onClick={() => onHelpClick()}
        >
          Help
        </Titles>
        <Titles
          fontSize="15px"
          underline="text-decoration: underline"
          cursor="pointer"
          userSelect=""
          marginLeft="20px"
          marginRight="20px"
          onClick={() => props.onTeamClick()}
        >
          Team
        </Titles>
        <Titles
          fontSize="15px"
          underline="text-decoration: underline"
          cursor="pointer"
          userSelect=""
          marginLeft="20px"
          marginRight="20px"
          onClick={() => onAboutClick()}
        >
          About
        </Titles>
        <Titles
          fontSize="15px"
          underline="text-decoration: underline"
          cursor="pointer"
          userSelect=""
          marginLeft="20px"
          marginRight="20px"
          onClick={() => onAboutClick()}
        >
          Sign in
        </Titles>
      </Row>
    </TopMenuContainer>
  );
};

export default TopMenu;
