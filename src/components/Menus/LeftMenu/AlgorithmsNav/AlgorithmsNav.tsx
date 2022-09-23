// Genady Kogan
import React, { ReactElement, useState } from "react";
import Dropdown from "../../../Common/Dropdown/Dropdown";
import Row from "../../../Common/Row";
import StyledButton from "../../../Tree/CreateEdgeModal/StyledButton";
import LeftMenuContentText from "../LeftMenuContentText";
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
  onUndirectedEdgeClick: Function;
  adjacencyList: Array<Array<number>>;
  onAddEdge: Function;
}

const AlgorithmsNav: React.FC<Props> = (props: Props): ReactElement => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [firstNode, setFirstNode] = useState<number>(0);
  const [secondNode, setSecondNode] = useState<number>(1);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <AlgorithmsNavContainer isVisible={isVisible}>
      <ToggleButton isVisible={isVisible} onClick={() => toggleVisibility()}>
        <Arrow isVisible={isVisible}></Arrow>
      </ToggleButton>

      <Row justifyContent="space-evenly" margin="10px 0px">
        <LeftMenuContentText>Node options</LeftMenuContentText>
      </Row>

      <Row justifyContent="space-evenly" margin="20px 0px">
        <OptionButton tooltipContent="Add node" onClick={props.addNewNode}>
          <AddIcon></AddIcon>
        </OptionButton>

        <OptionButton
          tooltipContent="Add undirected edge"
          onClick={() => {
            props.onUndirectedEdgeClick();
          }}
        >
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
        <ClearButtonContainer
          onClick={() => {
            props.clearCanvas();
          }}
        >
          <LeftMenuContentText>Clear canvas</LeftMenuContentText>
        </ClearButtonContainer>
      </Row>

      <Row justifyContent="space-evenly" margin="10px 0px">
        <LeftMenuContentText>Create undirected edge</LeftMenuContentText>
      </Row>

      <Row justifyContent="space-between">
        <LeftMenuContentText>From</LeftMenuContentText>
        <Dropdown
          content={props.adjacencyList.map(
            (_, index: number) => `${index + 1}`
          )}
          selectedTile={firstNode}
          setSelectedTile={setFirstNode}
        />
        <LeftMenuContentText>To</LeftMenuContentText>
        <Dropdown
          content={props.adjacencyList.map(
            (_, index: number) => `${index + 1}`
          )}
          selectedTile={secondNode}
          setSelectedTile={setSecondNode}
        />
      </Row>

      <StyledButton
        onClick={() => {
          props.onAddEdge(firstNode, secondNode);
        }}
      >
        Add
      </StyledButton>
    </AlgorithmsNavContainer>
  );
};

export default AlgorithmsNav;
