// Genady Kogan
import React, { ReactElement, useState } from "react";
import NodeEdgeNav from "./NodeEdgeNav/NodeEdgeNav";
import LeftMenuContainer from "./LeftMenuContainer";
import AlgorithmsNav from "./AlgorithmsNav/AlgorithmsNav";
import Algorithms from "../../../models/Algorithms";
import Container from "./Common/Container";
import ToggleButton from "./Common/ToggleButton";
import Arrow from "./Common/Arrow";
import Row from "../../Common/Row";
import LeftMenuContentText from "./Common/ContentText/LeftMenuContentText";
import Dropdown from "../../Common/Dropdown/Dropdown";
import ButtonContainer from "./NodeEdgeNav/NodeEdgeOptions/ButtonContainer";
import LeftMenuBottomContentText from "./Common/ContentText/LeftMenuBottomContentText";

interface Props {
  /* node and edge */
  addNewNode: () => void;
  clearCanvas: () => void;
  connectNodes: Function;
  onUndirectedEdgeClick: VoidFunction;
  adjacencyList: Array<Array<number>>;
  onAddEdge: Function;
  onDirectedEdgeClick: VoidFunction;
  onEdgeDelete: (firstNode: number, secondNode: number) => void;
  onNodeDelete: (node: number) => void;

  /* algorithms */
  setSelectedAlgorithm: Function;
  selectedAlgorithm: Algorithms;
}

const availableAlgorithms: Array<Algorithms> = [Algorithms.dfs];
const LeftMenu: React.FC<Props> = (props: Props): ReactElement => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isAlgorithmsVisible, setAlgorithmsIsVisible] = useState<boolean>(false);
  const [firstNode, setFirstNode] = useState<number>(0);
  const [secondNode, setSecondNode] = useState<number>(1);
  const [AlgorithmsZIndex, setAlgorithmsZIndex] = useState<string>('visible');
  const [NodeEdgeZIndex, setNodeEdgeZIndex] = useState<string>('visible');
console.log(AlgorithmsZIndex);
  
  const setSelectedAlgorithm = (val: number) => {
    const newSelectedAlgorithm = availableAlgorithms[val];
    props.setSelectedAlgorithm(newSelectedAlgorithm);
  };

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
    if (!isVisible){
     setAlgorithmsZIndex('hidden')}
     else{
      setAlgorithmsZIndex('visible')
     }
  };



  const toggleAlgoritmsVisibility = () => {
    setAlgorithmsIsVisible((prev) => !prev);
  };
  

  return (
    <LeftMenuContainer>
      {/* node and age area */}
      <Container visibility={NodeEdgeZIndex} isVisible={isVisible}>
        {/* toggle button */}
        <ToggleButton visibility={NodeEdgeZIndex}
          top="100px"
          isVisible={isVisible}
          onClick={() => toggleVisibility()}
        >
          <Arrow isVisible={isVisible}></Arrow>
        </ToggleButton>

        {/* node area */}
        <Row justifyContent="space-evenly" margin="10px 0px">
          <LeftMenuContentText fontSize="22px">
            Node options
          </LeftMenuContentText>
        </Row>

        <Row justifyContent="space-evenly" margin="20px 0px">
          {/*
       <OptionButton tooltipContent="Add node" onClick={props.addNewNode}>
          <AddIcon></AddIcon>
        </OptionButton>
        <OptionButton tooltipContent="Delete node" onClick={() => {}}>
          <DeleteIcon></DeleteIcon>
        </OptionButton>
        */}
          <ButtonContainer onClick={props.addNewNode}>
            <LeftMenuBottomContentText fontSize="16px">
              Add new node
            </LeftMenuBottomContentText>
          </ButtonContainer>
        </Row>

        <Row justifyContent="space-between" margin="0px 40px">
          <LeftMenuContentText fontSize="15px">Nodes:</LeftMenuContentText>
          <Dropdown
            width="80px"
            content={props.adjacencyList.map(
              (_, index: number) => `${index + 1}`
            )}
            selectedTile={firstNode}
            setSelectedTile={setFirstNode}
          />
        </Row>

        <Row justifyContent="space-evenly" margin="10px 0px">
          <ButtonContainer
            onClick={() => {
              props.onNodeDelete(firstNode);
            }}
          >
            <LeftMenuBottomContentText fontSize="16px">
              Delete node
            </LeftMenuBottomContentText>
          </ButtonContainer>
        </Row>

        {/* edge area */}
        <Row justifyContent="space-evenly" margin="10px 0px">
          <LeftMenuContentText fontSize="22px">
            Edge options
          </LeftMenuContentText>
        </Row>

        {/*
      <Row justifyContent="space-evenly" margin="10px 0px">
        <OptionButton
          tooltipContent="Add undirected edge"
          onClick={() => {
            props.onUndirectedEdgeClick();
          }}
        >
          <UndirectedIcon></UndirectedIcon>
        </OptionButton>
        <OptionButton
          tooltipContent="Add directed edge"
          onClick={() => {
            props.onDirectedEdgeClick();
          }}
        >
          <DirectedIcon></DirectedIcon>
        </OptionButton>
      </Row>
      */}

        <Row justifyContent="space-between" margin="0px 20px">
          <LeftMenuContentText fontSize="15px">From</LeftMenuContentText>
          <Dropdown
            width="80px"
            content={props.adjacencyList.map(
              (_, index: number) => `${index + 1}`
            )}
            selectedTile={firstNode}
            setSelectedTile={setFirstNode}
          />
          <LeftMenuContentText fontSize="15px">to</LeftMenuContentText>
          <Dropdown
            width="80px"
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
              props.connectNodes(firstNode, secondNode, false);
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
              props.connectNodes(firstNode, secondNode, true);
            }}
          >
            <LeftMenuBottomContentText fontSize="16px">
              Add directed edge
            </LeftMenuBottomContentText>
          </ButtonContainer>
        </Row>

        <Row justifyContent="space-evenly" margin="10px 0px">
          <ButtonContainer
            onClick={() => {
              props.onEdgeDelete(firstNode, secondNode);
            }}
          >
            <LeftMenuBottomContentText fontSize="16px">
              Delete edge
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
      </Container>

      {/* algorithms area */}
      <Container visibility= {AlgorithmsZIndex} isVisible={isAlgorithmsVisible}>
        <ToggleButton visibility={NodeEdgeZIndex}
          top="150px"
          isVisible={isAlgorithmsVisible}
          onClick={() => toggleAlgoritmsVisibility()}
        >
          <Arrow isVisible={isAlgorithmsVisible}></Arrow>
        </ToggleButton>

        {/* Algorithm  */}
        <Row justifyContent="space-evenly" margin="10px 0px">
          <LeftMenuContentText fontSize="22px">Algorithm</LeftMenuContentText>
        </Row>

        {/* selection of algorithms */}
        <Row justifyContent="center">
          <Dropdown
            width="170px"
            selectedTile={availableAlgorithms.indexOf(props.selectedAlgorithm)}
            setSelectedTile={setSelectedAlgorithm}
            content={availableAlgorithms}
          ></Dropdown>
        </Row>
      </Container>
    </LeftMenuContainer>
  );
};

export default LeftMenu;
