// Genady Kogan
import React, { ReactElement, useState } from "react";
import Algorithms from "../../../../models/Algorithms";
import Dropdown from "../../../Common/Dropdown/Dropdown";
import Row from "../../../Common/Row";


import Arrow from "../Common/Arrow";
import Container from "../Common/Container";
import LeftMenuContentText from "../Common/ContentText/LeftMenuContentText";

import ToggleButton from "../Common/ToggleButton";

interface Props {
   setSelectedAlgorithm: Function;
   selectedAlgorithm: Algorithms;
}

const availableAlgorithms: Array<Algorithms> = [
  Algorithms.dfs,
  
];

const AlgoruthmsNav: React.FC<Props> = (props: Props): ReactElement => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const setSelectedAlgorithm = (val: number) => {
    const newSelectedAlgorithm = availableAlgorithms[val];
    props.setSelectedAlgorithm(newSelectedAlgorithm);
  };

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <Container isVisible={isVisible}>
      {/* toggle button */}
      <ToggleButton
        top="150px"
        isVisible={isVisible}
        onClick={() => toggleVisibility()}
      >
        <Arrow isVisible={isVisible}></Arrow>
      </ToggleButton>

      {/* Algorithm  */}
      <Row justifyContent="space-evenly" margin="10px 0px">
        <LeftMenuContentText fontSize="22px">Algorithm</LeftMenuContentText>
      </Row>
      
      {/* selection of algorithms */}
      <Row justifyContent="center">
        <Dropdown  width = '170px'
          selectedTile={availableAlgorithms.indexOf(props.selectedAlgorithm)}
          setSelectedTile={setSelectedAlgorithm}
          content={availableAlgorithms}
        ></Dropdown>
      </Row>
    </Container>
  );
};

export default AlgoruthmsNav;
