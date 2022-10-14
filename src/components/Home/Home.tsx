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
import algorithms from "../Tree/Algorithms";

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
  const [userSelectedTreeNodeArray, updateNodesArray] = useState<
    Array<number>
  >([]);
  const [keysForUserSelectedNodes, setKeysForUserSelectedNode] = useState<Array<string>>([]);

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
  };
  const handlePlayVisualize = async () => {
    if (adjacencyList.length === 0) return;
    if (isPlayVisualizing) return;
    setPlayVisualizing(true);
    setVisited([]);
    setCurrentEdge([-1, -1]);

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

  const userSelectedNodesArrayData = (userSelectedTreeNode: Array<number>,keysForUserSelectedNodes: Array<string>) => {
    /* set user selected nodes array */
    updateNodesArray(userSelectedTreeNode);
     /* set keys for user selected nodes */
    const newNodeKeys = keysForUserSelectedNodes.slice();
    setKeysForUserSelectedNode(newNodeKeys);
   console.log(userSelectedTreeNode);
   console.log(keysForUserSelectedNodes);
  };

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
        /* transfer array data from NodeEdgeNav*/
        userSelectedNodesArrayData={userSelectedNodesArrayData}
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
