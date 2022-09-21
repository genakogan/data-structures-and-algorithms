// Genady Kogan
import React, { ReactElement, useState } from "react";
import BottomMenu from "../Menus/BottomMenu/BottomMenu";
import LeftMenu from "../Menus/LeftMenu/LeftMenu";
import TopMenu from "../Menus/TopMenu/TopMenu";
import Canvas from "../Canvas/Canvas";
import RightMenu from "../Menus/RightMenu/RightMenu";
import { v4 as uuidv4 } from "uuid";
import Algorithms from "../Tree/Algorithms";

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
  return (
    <div>
      <TopMenu
        changeTheme={props.changeTheme}
        onTeamClick={props.onTeamClick}
        setZoomPercentage={setZoomPercentage}
        zoomPercentage={zoomPercentage}
      ></TopMenu>
      <RightMenu></RightMenu>
      <LeftMenu addNewNode={addNewNode} clearCanvas={clearCanvas}></LeftMenu>

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
    </div>
  );
};

export default Home;
