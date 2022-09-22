// Genady Kogan
import React, { ReactElement, useState } from "react";
import BottomMenu from "../Menus/BottomMenu/BottomMenu";
import LeftMenu from "../Menus/LeftMenu/LeftMenu";
import TopMenu from "../Menus/TopMenu/TopMenu";
import Canvas from "../Canvas/Canvas";
import RightMenu from "../Menus/RightMenu/RightMenu";
import { v4 as uuidv4 } from "uuid";
import Algorithms from "../Tree/Algorithms";
import CreateEdgeModal from "../Tree/CreateEdgeModal/CreateEdgeModal";

const sampleGraph = [[1, 2, 4], [0, 3], [0, 5], [1], [0], [2]];

interface HomeProps {
  changeTheme: Function;
  onTeamClick: () => void;
}

const Home: React.FC<HomeProps> = (props: HomeProps): ReactElement => {
  const [zoomPercentage, setZoomPercentage] = useState<number>(1);
  const [adjacencyList, setAdjacencyList] =
    useState<Array<Array<number>>>(sampleGraph);
  const [nodeKeys, setNodeKeys] = useState<Array<string>>([]);
  const [isVisualizing, setIsVisualizing] = useState<boolean>(false);
  const [playVisualizing, setPlayVisualizing] = useState<boolean>(false);
  const [visited, setVisited] = useState<Array<number>>([]);
  const [startingNode, setStartingNode] = useState<number>(0);
  const [visualizationSpeed, setVisualizationSpeed] = useState<number>(1000);
  const [currentEdge, setCurrentEdge] = useState<[number, number]>([-1, -1]);
  const [isConnectingUndirected, setIsConnectingUndirected] =
    useState<boolean>(false);
  const [isConnectingDirected, setIsConnectingDirected] =
    useState<boolean>(false);
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
    setAdjacencyList([]);
    setNodeKeys([]);
  };
  const handlePlayVisualize = async () => {
    if (playVisualizing) return;
    setPlayVisualizing(true);
    setVisited([]);
    setCurrentEdge([-1, -1]);
    await Algorithms.dfs(
      adjacencyList,
      startingNode,
      setVisited,
      visualizationSpeed,
      setCurrentEdge
    );
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
        addNewNode={addNewNode}
        clearCanvas={clearCanvas}
        onUndirectedEdgeClick={() => setIsConnectingUndirected(true)}
      ></LeftMenu>

      <Canvas
        visited={visited}
        adjacencyList={adjacencyList}
        nodeKeys={nodeKeys}
        zoomPercentage={zoomPercentage}
        currentEdge={currentEdge}
      ></Canvas>

      <BottomMenu
        handlePlayVisualize={handlePlayVisualize}
        isVisualizing={isVisualizing}
        playVisualizing={playVisualizing}
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
