// Genady Kogan
import React, { ReactElement, useState } from "react";
import BottomMenu from "../Menus/BottomMenu/BottomMenu";
import LeftMenu from "../Menus/LeftMenu/LeftMenu";
import TopMenu from "../Menus/TopMenu/TopMenu";
import Canvas from "../Canvas/Canvas";
import RightMenu from "../Menus/RightMenu/RightMenu";
import { v4 as uuidv4 } from "uuid";

import CreateEdgeModal from "../Tree/TreeEdge/CreateEdgeModal/CreateEdgeModal";
import Algorithms from "../../models/Algorithms";
import algorithms from "../Tree/Algorithms/algorithms";
import BinaryTree from "../Tree/BinaryTree/BinaryTree";
import {
  BinarySearchTree,
  comparator,
} from "../Tree/BinaryTree/BinarySearchTree";

interface HomeProps {
  changeTheme: Function;
  onTeamClick: () => void;
}

const Home: React.FC<HomeProps> = (props: HomeProps): ReactElement => {
  const [zoomPercentage, setZoomPercentage] = useState<number>(1);
  const [adjacencyList, setAdjacencyList] = useState<Array<Array<number>>>([]);
  const [nodeKeys, setNodeKeys] = useState<Array<string>>([]);
  const [isPlayVisualizing, setPlayVisualizing] = useState<boolean>(false);
  const [isVisualizing, setIsVisualizing] = useState<boolean>(false);
  const [visited, setVisited] = useState<Array<number>>([]);
  const [startingNode, setStartingNode] = useState<number>(0);
  const [visualizationSpeed, setVisualizationSpeed] = useState<number>(1000);
  const [currentEdge, setCurrentEdge] = useState<[number, number]>([-1, -1]);
  const [isConnectingUndirected, setIsConnectingUndirected] =
    useState<boolean>(false);
  const [isConnectingDirected, setIsConnectingDirected] =
    useState<boolean>(false);

  const [selectedAlgorithm, setSelectedAlgorithm] = useState<Algorithms>(
    Algorithms.dfs
  );

  //===================================================================
  //===================================================================
  const [userSelectedTreeNodeArray, setUserSelectedTreeNodeArray] = useState<
    Array<number>
  >([]);
  const [keysForUserSelectedNodes, setKeysForUserSelectedNode] = useState<
    Array<string>
  >([]);

  //===================================================================
  const [aUserSelectedTreeNode, addUserSelectedTreeNode] = useState<string>("");
  const [dUserSelectedTreeNode, deleteUserSelectedTreeNode] =
    useState<string>("");

  //===================================================================
  //===================================================================

  const addNewNode = () => {
    /*
    The slice() method returns a shallow copy of a
    portion of an array into a new array object
    selected from start to end (end not included)
    where start and end represent the index of items
    in that array. The original array will not be modified.
    */
    const newAdjacencyList = adjacencyList.slice();

    /* 
    All new array represent new node
    */
    newAdjacencyList.push([]);
    //console.log(newAdjacencyList);
    /* 
    All node have a unique key
    */
    const newNodeKeys = nodeKeys.slice();
    newNodeKeys.push(uuidv4());
    setNodeKeys(newNodeKeys);
    setAdjacencyList((prev: Array<Array<number>>) => newAdjacencyList);
  };

  const clearCanvas = () => {
    if (isVisualizing) return;
    setAdjacencyList([]);
    setNodeKeys([]);
    setVisited([]);
    setCurrentEdge([-1, -1]);
    setUserSelectedTreeNodeArray([]);
    setKeysForUserSelectedNode([]);
  };
  const handlePlayVisualize = async () => {
    //if (adjacencyList.length === 0) return;
    //if (isPlayVisualizing) return;
    setPlayVisualizing(true);
    setVisited([]);
    setCurrentEdge([-1, -1]);
    // TODO - check the sequence of nodes after adding edges
    switch (selectedAlgorithm) {
      case Algorithms.dfs:
        await algorithms.dfs(
          adjacencyList,
          startingNode,
          setVisited,
          visualizationSpeed,
          setCurrentEdge
        );
        break;

      case Algorithms.bfs:
        // TODO - set grapfh info
        await algorithms.bfs(
          adjacencyList,
          setVisited,
          startingNode,
          visualizationSpeed,
          setCurrentEdge
        );
        break;
      default:
        break;
    }
    setPlayVisualizing(false);
  };

  const changeVisualizationSpeed = (speed: number) => {
    if (isVisualizing) return;
    setVisualizationSpeed(speed);
  };

  const handleEdgeModalExit = () => {
    setIsConnectingUndirected(false);
    setIsConnectingDirected(false);
  };

  const onCreateUndirectedEdge = (firstNode: number, secondNode: number) => {
    connectNodes(firstNode, secondNode, isConnectingDirected);
  };

  const connectNodes = (
    firstNode: number,
    secondNode: number,
    directed: boolean
  ) => {
    if (firstNode === undefined || secondNode === undefined) return;
    if (firstNode === secondNode) return;
    if (
      firstNode > adjacencyList.length - 1 ||
      secondNode > adjacencyList.length - 1
    )
      return;
    if (adjacencyList[firstNode].includes(secondNode)) return;
    if (adjacencyList[secondNode].includes(firstNode)) return;

    addNewEdge(firstNode, secondNode, directed);
  };

  const addNewEdge = (
    firstNode: number,
    secondNode: number,
    isDirected: boolean
  ) => {
    const newAdjacencyList = adjacencyList.slice();
    newAdjacencyList[firstNode].push(secondNode);
    if (!isDirected) newAdjacencyList[secondNode].push(firstNode);
    setAdjacencyList(newAdjacencyList);
  };
  const deleteNode = (node: number) => {
    let newAdjacencyList = adjacencyList.map((val: Array<number>) => {
      //remove node from neighbours and decrement all nodes bigger than the
      //removed node
      return val
        .filter((neighbour: number) => node !== neighbour)
        .map((current: number) => {
          if (current >= node) return current - 1;

          return current;
        });
    });

    newAdjacencyList = newAdjacencyList.filter(
      (_, index: number) => index !== node
    );

    const newNodeKeys = nodeKeys.filter((_, index: number) => index !== node);

    setNodeKeys(newNodeKeys);
    setAdjacencyList(newAdjacencyList);
    resetGraphState();
  };

  const resetGraphState = () => {
    setVisited([]);
    setCurrentEdge([-1, -1]);
  };
  const deleteEdge = (firstNode: number, secondNode: number) => {
    const newAdjacencyList = adjacencyList.slice();
    newAdjacencyList[firstNode] = newAdjacencyList[firstNode].filter(
      (val: number) => val !== secondNode
    );
    newAdjacencyList[secondNode] = newAdjacencyList[secondNode].filter(
      (val: number) => val !== firstNode
    );

    setAdjacencyList(newAdjacencyList);
    resetGraphState();
  };
  //===================================================================
  //===================================================================

  const userSelectedNodesArrayData = (
    userSelectedTreeNode: Array<number>,
    keysForUserSelectedNodes: Array<string>
  ) => {
    /* set user selected nodes array */
    setUserSelectedTreeNodeArray(userSelectedTreeNode);
    /* set keys for user selected nodes */
    const newNodeKeys = keysForUserSelectedNodes.slice();
    setKeysForUserSelectedNode(newNodeKeys);
  };
  //===================================================================
  /* add a user-selected node function*/
  const submitAddForm = (event: React.FormEvent<HTMLFormElement>) => {
    // preventing the page from reloading
    event.preventDefault();

    // insert new valuse
    userSelectedTreeNodeArray.push(Number(aUserSelectedTreeNode));
    setUserSelectedTreeNodeArray(() => userSelectedTreeNodeArray);

    // reset input form
    addUserSelectedTreeNode("");

    // add key for node
    keysForUserSelectedNodes.push(uuidv4());

    // set key
    setKeysForUserSelectedNode(keysForUserSelectedNodes);

    // update nodes data
    userSelectedNodesArrayData(
      userSelectedTreeNodeArray,
      keysForUserSelectedNodes
    );
  };

  const addUserSelectedNode = (e: { target: { value: string } }) => {
    // prevent typing non-numeric in input type number
    const result = e.target.value.replace(/\D/g, "");

    addUserSelectedTreeNode(result);
  };
  //========================================================================
  /* delete a user-selected node function */
  const submitDeleteForm = (event: React.FormEvent<HTMLFormElement>) => {
    // preventing the page from reloading
    event.preventDefault();

    // reset input form
    deleteUserSelectedTreeNode("");

    // find index of deleted node
    const indexOfObject = userSelectedTreeNodeArray.findIndex((node) => {
      return node === Number(dUserSelectedTreeNode);
    });

    // delete node
    if (indexOfObject !== -1) {
      userSelectedTreeNodeArray.splice(indexOfObject, 1);
    }

    if (indexOfObject !== -1) {
      keysForUserSelectedNodes.splice(indexOfObject, 1);
    }
    // set new array
    setUserSelectedTreeNodeArray(userSelectedTreeNodeArray);
    // set new keys
    setKeysForUserSelectedNode(keysForUserSelectedNodes);

    // update nodes data
    userSelectedNodesArrayData(
      userSelectedTreeNodeArray,
      keysForUserSelectedNodes
    );
  };
  const deleteUserSelectedNode = (e: { target: { value: string } }) => {
    // prevent typing non-numeric in input type number
    const result = e.target.value.replace(/\D/g, "");
    deleteUserSelectedTreeNode(result);
  };

  //===================================================================
  //===============================  BT ===============================
  const binaryTree = new BinaryTree();
  binaryTree
    .insertBT(10)
    .insertBT(20)
    .insertBT(30)
    .insertBT(5)
    .insertBT(8)
    .insertBT(1)
    .insertBT(9);
  //console.log(binaryTree.contains(30)) // true
  //console.log(binaryTree.findMin()) // 1
  //console.log(binaryTree.findMax()) // 30
  //=============================== BST ===============================
  //===================================================================

  const bst = new BinarySearchTree(comparator);

  bst.insert(5);

  bst.insert(2);
  bst.insert(3);
  bst.insert(0);

  bst.insert(7);
  bst.insert(6);
  bst.insert(8);
  //console.log(bst.findMin())
  //=============================== BST ===============================
  //===================================================================
  return (
    <div>
      <TopMenu
        changeTheme={props.changeTheme}
        onTeamClick={props.onTeamClick}
        setZoomPercentage={setZoomPercentage}
        zoomPercentage={zoomPercentage}
      ></TopMenu>

      <RightMenu></RightMenu>

      <LeftMenu
        onNodeDelete={deleteNode}
        onEdgeDelete={deleteEdge}
        connectNodes={connectNodes}
        onAddEdge={onCreateUndirectedEdge}
        adjacencyList={adjacencyList}
        addNewNode={addNewNode}
        clearCanvas={clearCanvas}
        onUndirectedEdgeClick={() => setIsConnectingUndirected(true)}
        onDirectedEdgeClick={() => setIsConnectingDirected(true)}
        setSelectedAlgorithm={setSelectedAlgorithm}
        selectedAlgorithm={selectedAlgorithm}
        startingNode={startingNode}
        setStartingNode={setStartingNode}
        /* add usere-selected tree node */
        aUserSelectedTreeNode={aUserSelectedTreeNode}
        submitAddForm={submitAddForm}
        addUserSelectedNode={addUserSelectedNode}
        /* delete usere-selected tree node */
        dUserSelectedTreeNode={dUserSelectedTreeNode}
        deleteUserSelectedNode={deleteUserSelectedNode}
        submitDeleteForm={submitDeleteForm}
      ></LeftMenu>

      <Canvas
        //===============================================
        keysForUserSelectedNodes={keysForUserSelectedNodes}
        userSelectedTreeNodeArray={userSelectedTreeNodeArray}
        //===============================================

        visited={visited}
        adjacencyList={adjacencyList}
        nodeKeys={nodeKeys}
        zoomPercentage={zoomPercentage}
        currentEdge={currentEdge}
      ></Canvas>

      <BottomMenu
        handlePlayVisualize={handlePlayVisualize}
        isVisualizing={isVisualizing}
        playVisualizing={isPlayVisualizing}
        visualizationSpeed={visualizationSpeed}
        setVisualizationSpeed={changeVisualizationSpeed}
      ></BottomMenu>

      <CreateEdgeModal
        directed={isConnectingDirected}
        isVisible={isConnectingDirected || isConnectingUndirected}
        onExit={handleEdgeModalExit}
        onAddEdge={onCreateUndirectedEdge}
        adjacencyList={adjacencyList}
      />
    </div>
  );
};

export default Home;
