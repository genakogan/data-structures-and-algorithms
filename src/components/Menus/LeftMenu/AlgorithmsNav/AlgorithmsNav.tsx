import React, { ReactElement, useState } from "react";
import AlgorithmsNavContainer from "./AlgorithmsNavContainer";
import Arrow from "./Arrow";
import ToggleButton from "./ToggleButton";

const AlgorithmsNav: React.FC = (): ReactElement => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const toggleVisibility = () => {
        setIsVisible((prev) => !prev);
      };
  return (
    <AlgorithmsNavContainer isVisible={isVisible}>
     <ToggleButton isVisible={isVisible} onClick={() => toggleVisibility()}>
        <Arrow isVisible={isVisible}></Arrow>
      </ToggleButton>
      
    </AlgorithmsNavContainer>
  );
};

export default AlgorithmsNav;
