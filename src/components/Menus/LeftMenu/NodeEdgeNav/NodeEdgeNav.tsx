// Genady Kogan
import React, { ReactElement, useState } from "react";
import Dropdown from "../../../Common/Dropdown/Dropdown";
import Row from "../../../Common/Row";
import LeftMenuBottomContentText from "../Common/ContentText/LeftMenuBottomContentText";
import LeftMenuContentText from "../Common/ContentText/LeftMenuContentText";
import ButtonContainer from "./NodeEdgeOptions/ButtonContainer";
/*import OptionButton from "./NodeEdgeOptions/OptionButton";*/
/*import {
  AddIcon,
  DeleteIcon,
  DirectedIcon,
  UndirectedIcon,
} from "./NodeEdgeOptions/OptionIcons";*/
import Container from "../Common/Container";
import SubmitButton from "./NodeEdgeOptions/InoutuserSelectedNode/SubmitButton";
import Input from "./NodeEdgeOptions/InoutuserSelectedNode/Input";

interface Props {
  isVisible: boolean;
  addNewNode: () => void;
  adjacencyList: Array<Array<number>>;
  onNodeDelete: (node: number) => void;
  connectNodes: Function;
  onEdgeDelete: Function;
  clearCanvas: () => void;

  transferArrayData: (userSelectedTreeNodeArray: Array<number>) => void;
}

const NodeEdgeNav: React.FC<Props> = (props: Props): ReactElement => {
  const [firstNode, setFirstNode] = useState<number>(0);
  const [secondNode, setSecondNode] = useState<number>(1);

  /* a user-selected node */
  const [aUserSelectedTreeNode, addUserSelectedTreeNode] = useState<string>("");
  const [userSelectedTreeNodeArray, _] = useState<Array<number>>([]);

  const [dUserSelectedTreeNode, deleteUserSelectedTreeNode] =
    useState<string>("");

  /* add a user-selected node */
  const submitAddForm = (event: React.FormEvent<HTMLFormElement>) => {
    // preventing the page from reloading
    event.preventDefault();

    // insert new valuse
    userSelectedTreeNodeArray.push(Number(aUserSelectedTreeNode));
    addUserSelectedTreeNode("");
    props.transferArrayData(userSelectedTreeNodeArray);
    console.log(userSelectedTreeNodeArray);
  };

  const addNode = (e: { target: { value: string } }) => {
    // prevent typing non-numeric in input type number
    const result = e.target.value.replace(/\D/g, "");
    addUserSelectedTreeNode(result);
    //doingSomething();
  };

  /* delete a user-selected node */
  const submitDeleteForm = (event: React.FormEvent<HTMLFormElement>) => {
    // preventing the page from reloading
    event.preventDefault();
    deleteUserSelectedTreeNode("");
    const indexOfObject = userSelectedTreeNodeArray.findIndex((node) => {
      return node === Number(dUserSelectedTreeNode);
    });

    if (indexOfObject !== -1) {
      userSelectedTreeNodeArray.splice(indexOfObject, 1);
    }
    console.log(userSelectedTreeNodeArray);
  };
  const deleteNode = (e: { target: { value: string } }) => {
    // prevent typing non-numeric in input type number
    const result = e.target.value.replace(/\D/g, "");
    deleteUserSelectedTreeNode(result);
  };

  return (
    <Container isVisible={props.isVisible}>
      <Row justifyContent="space-evenly" margin="10px 0px">
        <LeftMenuContentText fontSize="22px">Node options</LeftMenuContentText>
      </Row>

      <Row justifyContent="space-evenly" margin="20px 0px">
        <ButtonContainer width="220px" onClick={props.addNewNode}>
          <LeftMenuBottomContentText fontSize="16px">
            Add new node
          </LeftMenuBottomContentText>
        </ButtonContainer>
      </Row>

      {/* add new node */}
      <Row justifyContent="space-between" margin="0px 10px">
        <ButtonContainer
          width="120px"
          onClick={() => {
            props.onNodeDelete(firstNode);
          }}
        >
          <LeftMenuBottomContentText fontSize="16px">
            Delete node
          </LeftMenuBottomContentText>
        </ButtonContainer>
        <Dropdown
          right="30px"
          width="80px"
          content={props.adjacencyList.map(
            (_, index: number) => `${index + 1}`
          )}
          selectedTile={firstNode}
          setSelectedTile={setFirstNode}
        />
      </Row>

      {/* add a user-selected node */}
      <form onSubmit={submitAddForm}>
        <Row justifyContent="space-between" margin="0px 10px">
          <SubmitButton
            disabled={!aUserSelectedTreeNode}
            type="submit"
            value="Add node"
            width="120px"
          ></SubmitButton>

          <Input
            type="text"
            placeholder="add node"
            width="72px"
            right="30px"
            height="27px"
            value={aUserSelectedTreeNode}
            onChange={addNode}
          ></Input>
        </Row>
      </form>
      {/* delete a user-selected node */}
      <form onSubmit={submitDeleteForm}>
        <Row justifyContent="space-between" margin="0px 10px">
          <SubmitButton
            disabled={!dUserSelectedTreeNode}
            type="submit"
            value="Delete node"
            width="120px"
          ></SubmitButton>

          <Input
            type="text"
            placeholder="delete node"
            width="72px"
            right="30px"
            height="27px"
            value={dUserSelectedTreeNode}
            onChange={deleteNode}
          ></Input>
        </Row>
      </form>

      {/* edge area*/}
      <Row justifyContent="space-evenly" margin="10px 0px">
        <LeftMenuContentText fontSize="22px">Edge options</LeftMenuContentText>
      </Row>

      {/* choose edge pair */}
      <Row justifyContent="space-between" margin="0px 20px">
        <LeftMenuContentText fontSize="15px">From</LeftMenuContentText>
        <Dropdown
          right="none"
          width="80px"
          content={props.adjacencyList.map(
            (_, index: number) => `${index + 1}`
          )}
          selectedTile={firstNode}
          setSelectedTile={setFirstNode}
        />
        <LeftMenuContentText fontSize="15px">to</LeftMenuContentText>
        <Dropdown
          right="none"
          width="80px"
          content={props.adjacencyList.map(
            (_, index: number) => `${index + 1}`
          )}
          selectedTile={secondNode}
          setSelectedTile={setSecondNode}
        />
      </Row>

      {/* add undirected edge */}
      <Row justifyContent="space-evenly" margin="10px 0px">
        <ButtonContainer
          width="220px"
          onClick={() => {
            props.connectNodes(firstNode, secondNode, false);
          }}
        >
          <LeftMenuBottomContentText fontSize="16px">
            Add undirected edge
          </LeftMenuBottomContentText>
        </ButtonContainer>
      </Row>

      {/* add directed edge */}
      <Row justifyContent="space-evenly" margin="10px 0px">
        <ButtonContainer
          width="220px"
          onClick={() => {
            props.connectNodes(firstNode, secondNode, true);
          }}
        >
          <LeftMenuBottomContentText fontSize="16px">
            Add directed edge
          </LeftMenuBottomContentText>
        </ButtonContainer>
      </Row>

      {/* Delete edge */}
      <Row justifyContent="space-evenly" margin="10px 0px">
        <ButtonContainer
          width="220px"
          onClick={() => {
            props.onEdgeDelete(firstNode, secondNode);
          }}
        >
          <LeftMenuBottomContentText fontSize="16px">
            Delete edge
          </LeftMenuBottomContentText>
        </ButtonContainer>
      </Row>

      {/* Clear canvas */}
      <Row justifyContent="space-evenly" margin="10px 0px">
        <ButtonContainer
          width="220px"
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
  );
};

export default NodeEdgeNav;
