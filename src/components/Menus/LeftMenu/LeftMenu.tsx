// Genady Kogan
import React, { ReactElement } from "react";
import AlgorithmsNav from "./AlgorithmsNav/AlgorithmsNav";
import LeftMenuContainer from "./LeftMenuContainer";

const LeftMenu: React.FC = (): ReactElement => {
  return (
    <LeftMenuContainer>
      <AlgorithmsNav></AlgorithmsNav>
    </LeftMenuContainer>
  );
};

export default LeftMenu;
