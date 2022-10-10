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
import ToolTip from "../../Common/ToolTip";

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
  startingNode: number;
  setStartingNode: Function;
}

const availableAlgorithms: Array<Algorithms> = [Algorithms.dfs];
const LeftMenu: React.FC<Props> = (props: Props): ReactElement => {
  const [isNodeEdgeNavVisible, setNodeEdgeNavVisible] =
    useState<boolean>(false);
  const [isAlgorithmsVisible, setAlgorithmsIsVisible] =
    useState<boolean>(false);
  const [firstNode, setFirstNode] = useState<number>(0);
  const [secondNode, setSecondNode] = useState<number>(1);

  /*tooltip visibility */
  const [isNodeEdgeTooltipVisible, setIsNodeedgeToolTipVisible] =
    useState<boolean>(false);
  const [isAlgorithmsTooltipVisible, setIsAlgorithmsToolTipVisible] =
    useState<boolean>(false);

  const adjacencyList = props.adjacencyList;

  const setSelectedAlgorithm = (val: number) => {
    const newSelectedAlgorithm = availableAlgorithms[val];
    props.setSelectedAlgorithm(newSelectedAlgorithm);
  };

  const toggleNodeEdgeVisibility = () => {
    if (isAlgorithmsVisible) {
      setAlgorithmsIsVisible((prev) => !prev);
    }
    setNodeEdgeNavVisible((prev) => !prev);
  };

  const toggleAlgoritmsVisibility = () => {
    if (isNodeEdgeNavVisible) {
      setNodeEdgeNavVisible((prev) => !prev);
    }
    setAlgorithmsIsVisible((prev) => !prev);
  };

  return (
    <LeftMenuContainer>
      {/* node and adge area */}
      <ToggleButton
        onMouseEnter={() => setIsNodeedgeToolTipVisible(true)}
        onMouseLeave={() => setIsNodeedgeToolTipVisible(false)}
        top="100px"
        isVisible={isNodeEdgeNavVisible}
        onClick={() => toggleNodeEdgeVisibility()}
      >
        <ToolTip top='none' left='50px' isVisible={isNodeEdgeTooltipVisible}>
          {"Node-edge"}
        </ToolTip>
        <Arrow isVisible={isNodeEdgeNavVisible}></Arrow>
      </ToggleButton>
      <Container isVisible={isNodeEdgeNavVisible}>
        {/* toggle button */}

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
      <ToggleButton
        onMouseEnter={() => setIsAlgorithmsToolTipVisible(true)}
        onMouseLeave={() => setIsAlgorithmsToolTipVisible(false)}
        top="150px"
        isVisible={isAlgorithmsVisible}
        onClick={() => toggleAlgoritmsVisibility()}
      >
        <ToolTip top='none' left='50px' isVisible={isAlgorithmsTooltipVisible}>{"Algorithms"}</ToolTip>
        <Arrow isVisible={isAlgorithmsVisible}></Arrow>
      </ToggleButton>
      <Container isVisible={isAlgorithmsVisible}>

        {/* Algorithm  */}
        <Row justifyContent="space-evenly" margin="10px 0px">
          <LeftMenuContentText fontSize="22px">Algorithms</LeftMenuContentText>
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

        {/*  */}
        <Row justifyContent="space-evenly" margin="10px 0px">
          <LeftMenuContentText fontSize="15px">Starting node</LeftMenuContentText>
          <Dropdown  width="80px"
            selectedTile={props.startingNode} //
            setSelectedTile={props.setStartingNode}
            content={adjacencyList.map((val: Array<number>, index: number) => {
              return (index + 1).toString();
            })}
          ></Dropdown>
        </Row>

      </Container>
    </LeftMenuContainer>
  );
};

export default LeftMenu;
