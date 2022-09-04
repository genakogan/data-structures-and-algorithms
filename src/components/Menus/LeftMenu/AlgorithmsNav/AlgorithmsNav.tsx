import React, { ReactElement, useState } from "react";
import Row from "../../../Common/Row";
import Titles from "../../../Common/Titles";
import AlgorithmsNavContainer from "./AlgorithmsNavContainer";
import Arrow from "./Arrow";
import OptionButton from "./NodeOptions/OptionButton";
import { AddIcon, DeleteIcon, DirectedIcon, UndirectedIcon } from "./NodeOptions/OptionIcons";
import ToggleButton from "./ToggleButton";

const AlgorithmsNav: React.FC = (): ReactElement => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <AlgorithmsNavContainer isVisible={isVisible}>
      <ToggleButton isVisible={isVisible} onClick={() => toggleVisibility()}>
        <Arrow isVisible={isVisible}></Arrow>
      </ToggleButton>
      <Row justifyContent="space-evenly" margin="10px 0px">
      <Titles
          fontSize="18px"
          underline=""
          cursor=""
          userSelect=""
          marginLeft=""
          marginRight=""
        >
          Node options
        </Titles>
        </Row>
      <Row justifyContent="space-evenly" margin="20px 0px">
        <OptionButton tooltipContent="Add node">
          <AddIcon></AddIcon>
        </OptionButton>
        <OptionButton tooltipContent="Add undirected edge">
          <UndirectedIcon></UndirectedIcon>
        </OptionButton>
        <OptionButton
          tooltipContent="Add directed edge"
          
        >
          <DirectedIcon></DirectedIcon>
        </OptionButton>

        <OptionButton
          tooltipContent="Delete edge"
          
        >
          <DeleteIcon></DeleteIcon>
        </OptionButton>
      </Row>
    </AlgorithmsNavContainer>
  );
};

export default AlgorithmsNav;
