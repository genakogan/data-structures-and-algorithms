// Genady Kogan
import React, { ReactElement } from "react";
import TopMenuContainer from "./TopMenuContainer";
import Row from "../Common/Row";
import Titles from "../Common/Titles";
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch";

interface TopMenuProps {
  changeTheme: Function;
  onTeamClick: () => void;
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
        <Titles fontSize="24px" underline="" cursor="" userSelect="none">
          AVDS
        </Titles>
      </Row>
      <Row justifyContent="space-between" margin="0 35px">
        <Titles
          fontSize="15px"
          underline="text-decoration: underline"
          cursor="pointer"
          userSelect=""
          onClick={() => onHelpClick()}
        >
          Help
        </Titles>
        <Titles
          fontSize="15px"
          underline="text-decoration: underline"
          cursor="pointer"
          userSelect=""
          onClick={() => props.onTeamClick()}
        >
          Team
        </Titles>
        <Titles
          fontSize="15px"
          underline="text-decoration: underline"
          cursor="pointer"
          userSelect=""
          onClick={() => onAboutClick()}
        >
          About
        </Titles>
        <Titles
          fontSize="15px"
          underline="text-decoration: underline"
          cursor="pointer"
          userSelect=""
          onClick={() => onAboutClick()}
        >
          Sign in
        </Titles>
      </Row>
    </TopMenuContainer>
  );
};

export default TopMenu;
