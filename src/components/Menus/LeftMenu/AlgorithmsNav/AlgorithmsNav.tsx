import React, { ReactElement, useState } from "react";
import Row from "../../../Common/Row";
import Titles from "../../../Common/Titles";
import AlgorithmsNavContainer from "./AlgorithmsNavContainer";
import Arrow from "./Arrow";
import ClearButtonContainer from "./NodeOptions/ClearButtonContainer";
import OptionButton from "./NodeOptions/OptionButton";
import {
  AddIcon,
  DeleteIcon,
  DirectedIcon,
  UndirectedIcon,
} from "./NodeOptions/OptionIcons";
import ToggleButton from "./ToggleButton";

interface Props {
  addNewNode: () => void;
  clearCanvas: Function;
}

const AlgorithmsNav: React.FC<Props> = (props: Props): ReactElement => {
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
        <OptionButton tooltipContent="Add node" onClick={props.addNewNode}>
          <AddIcon></AddIcon>
        </OptionButton>

        <OptionButton tooltipContent="Add undirected edge" onClick={() => {}}>
          <UndirectedIcon></UndirectedIcon>
        </OptionButton>

        <OptionButton tooltipContent="Add directed edge" onClick={() => {}}>
          <DirectedIcon></DirectedIcon>
        </OptionButton>

        <OptionButton tooltipContent="Delete edge" onClick={() => {}}>
          <DeleteIcon></DeleteIcon>
        </OptionButton>
      </Row>

      <Row justifyContent="space-evenly" margin="10px 0px">
        <ClearButtonContainer onClick={()=>{props.clearCanvas()}}>
          <Titles
            fontSize="18px"
            underline=""
            cursor=""
            userSelect=""
            marginLeft=""
            marginRight=""
          >
            Clear canvas
          </Titles>
        </ClearButtonContainer>
      </Row>
    </AlgorithmsNavContainer>
  );
};

export default AlgorithmsNav;
