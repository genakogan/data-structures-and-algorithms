import helpers from "../../../helpers";

let globalVisited: Array<number> = [];

const dfs = async (
  graph: Array<Array<number>>,
  node: number,
  setVisited: Function,
  visualizationSpeed: number,
  previousNode: number
): Promise<void> => {

  
  if (globalVisited.includes(node)) return;
  await helpers.asyncTimout(visualizationSpeed);

  /*
  the concat() method joins two or more strings, does
  not change the existing strings, returns a new string.
  */
  globalVisited = globalVisited.concat(node);
  setVisited(globalVisited);


  for (let neighbour of graph[node]) {
    await dfs(
      graph,
      neighbour,
      setVisited,
      visualizationSpeed,
      node
    );
  }
};

const dfsWrapper = async (
  graph: Array<Array<number>>,
  node: number,
  setVisited: Function,
  visualizationSpeed: number,
) => {
  globalVisited = [];

  /* last parametrs is previousNode, -1 for starting */
  await dfs(graph, node, setVisited, visualizationSpeed, -1);
};

export default dfsWrapper;
