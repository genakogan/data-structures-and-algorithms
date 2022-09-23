// Genady Kogan
import React, { ReactElement, useState } from "react";
import Dropdown from "../../../Common/Dropdown/Dropdown";
import Row from "../../../Common/Row";
import LeftMenuBottomContentText from "../ContentText/LeftMenuBottomContentText";
import LeftMenuContentText from "../ContentText/LeftMenuContentText";
import AlgorithmsNavContainer from "./AlgorithmsNavContainer";
import Arrow from "./Arrow";
import ButtonContainer from "./NodeOptions/ButtonContainer";
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
        <LeftMenuContentText fontSize="22px">Node options</LeftMenuContentText>
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
        <LeftMenuContentText fontSize="22px">
          Create undirected edge
        </LeftMenuContentText>
      </Row>

      <Row justifyContent="space-between" margin="0px 20px">
        <LeftMenuContentText fontSize="15px">From</LeftMenuContentText>
        <Dropdown
          content={props.adjacencyList.map(
            (_, index: number) => `${index + 1}`
          )}
          selectedTile={firstNode}
          setSelectedTile={setFirstNode}
        />
        <LeftMenuContentText fontSize="15px">To</LeftMenuContentText>
        <Dropdown
          content={props.adjacencyList.map(
            (_, index: number) => `${index + 1}`
          )}
          selectedTile={secondNode}
          setSelectedTile={setSecondNode}
        />
      </Row>

      <Row justifyContent="space-evenly" margin="10px 0px">
        <ButtonContainer
          onClick={() => {
            props.onAddEdge(firstNode, secondNode);
          }}
        >
          <LeftMenuBottomContentText fontSize="16px">
            Add undirected edge
          </LeftMenuBottomContentText>
        </ButtonContainer>
      </Row>

      <Row justifyContent="space-evenly" margin="10px 0px">
        <ButtonContainer
          onClick={() => {
            props.clearCanvas();
          }}
        >
          <LeftMenuBottomContentText fontSize="16px">
            Clear canvas
          </LeftMenuBottomContentText>
        </ButtonContainer>
      </Row>
    </AlgorithmsNavContainer>
  );
};

export default AlgorithmsNav;
