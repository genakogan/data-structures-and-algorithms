// Genady Kogan
import React, { ReactElement } from "react";
import Algorithms from "../../../../models/Algorithms";
import Dropdown from "../../../Common/Dropdown/Dropdown";
import Row from "../../../Common/Row";
import Container from "../Common/Container";
import LeftMenuContentText from "../Common/ContentText/LeftMenuContentText";
interface Props {
  isVisible: boolean;
  selectedAlgorithm: Algorithms;
  setSelectedAlgorithm: Function;
  selectedTile: number;
  setSelectedTile: Function;
  adjacencyList: Array<Array<number>>;
}

const availableAlgorithms: Array<Algorithms> = [Algorithms.dfs];

const AlgoruthmsNav: React.FC<Props> = (props: Props): ReactElement => {
  const setSelectedAlgorithm = (val: number) => {
    const newSelectedAlgorithm = availableAlgorithms[val];
    props.setSelectedAlgorithm(newSelectedAlgorithm);
  };

  return (
    <Container isVisible={props.isVisible}>
      <Row justifyContent="space-evenly" margin="10px 0px">
        <LeftMenuContentText fontSize="22px">Algorithms</LeftMenuContentText>
      </Row>

      {/* select of algorithms */}
      <Row justifyContent="center">
        <Dropdown
          width="170px"
          selectedTile={availableAlgorithms.indexOf(props.selectedAlgorithm)}
          setSelectedTile={setSelectedAlgorithm}
          content={availableAlgorithms}
        ></Dropdown>
      </Row>

     {/* starting node */}
      <Row justifyContent="space-evenly" margin="10px 0px">
        <LeftMenuContentText fontSize="15px">Starting node</LeftMenuContentText>
        <Dropdown
          width="80px"
          selectedTile={props.selectedTile} //
          setSelectedTile={props.setSelectedTile}
          content={props.adjacencyList.map(
            (val: Array<number>, index: number) => {
              return (index + 1).toString();
            }
          )}
        ></Dropdown>
      </Row>
    </Container>
  );
};

export default AlgoruthmsNav;
