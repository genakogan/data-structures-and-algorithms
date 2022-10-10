import React, { ReactElement, } from "react";
import BottomMenuContainer from "./BottomMenuContainer";
import PlayControl from "./MoveControl/PlayControl";
import {
  PauseIcon,
  PlayIcon,
  ReplayIcon,
  SkipBackIcon,
  SkipForwardIcon,
  StepBackIcon,
  StepForwardIcon,
} from "./MoveControl/OptionIcons";
import SkipForwardControl from "./MoveControl/SkipForwardControl";
import StepForwardControl from "./MoveControl/StepForwardControl";
import ReplayControl from "./MoveControl/ReplayControl";
import PauseControl from "./MoveControl/PauseControl";
import StepBackControl from "./MoveControl/StepBackControl";
import SkipBackControl from "./MoveControl/SkipBackControl";
import Slider from "../../Common/Slider";
import Row from "../../Common/Row";
import BottomMenuContentText from "./BottomMenuContentText";

interface Props {
  handlePlayVisualize: Function;
  isVisualizing: boolean;
  playVisualizing: boolean;
  setVisualizationSpeed: Function;
  visualizationSpeed: number;
}

const BottomMenu: React.FC<Props> = (props: Props): ReactElement => {
 

  return (
    <BottomMenuContainer>
      <Row justifyContent="space-between" margin="0px 30px">
        <Slider width="200px" paddingRight ='120px'>
          <input
            type="range"
            className="slider"
            min={500}
            max={3000}
            step={50}
            value={3500 - props.visualizationSpeed}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const val: number = +e.target.value;
            const speed: number = +e.target.max + +e.target.min - val;
            props.setVisualizationSpeed(speed);
          }}
          />
        </Slider>

        <BottomMenuContentText
          left='250px'
          fontSize="15px"
          underline=""
          cursor=""
          userSelect=""
          marginLeft="20px" 
          marginRight="20px"
        >
          {props.visualizationSpeed+"x"}
        </BottomMenuContentText>
        <BottomMenuContentText
          left='325px'
          fontSize="15px"
          underline=""
          cursor=""
          userSelect="none"
          marginLeft="0px"
          marginRight="20px"
        >
          Speed
        </BottomMenuContentText>

        <Slider width="300px" paddingRight ='none'>
          <input
            type="range"
            className="slider"
            min={0.5}
            max={1.5}
            step={0.1}
          />
        </Slider>

        <BottomMenuContentText
          left='700px'
          fontSize="15px"
          underline=""
          cursor=""
          userSelect="none"
          marginLeft="20px"
          marginRight="20px"
        >
          Steps
        </BottomMenuContentText>
  
        </Row>
      {/*move control buttons*/}
      
        <SkipBackControl  isVisualizing={props.isVisualizing}>
          <SkipBackIcon></SkipBackIcon>
        </SkipBackControl>

        <StepBackControl isVisualizing={props.isVisualizing}>
          <StepBackIcon></StepBackIcon>
        </StepBackControl>

        <PlayControl isVisualizing={props.playVisualizing} onClick={props.handlePlayVisualize}>
          <PlayIcon></PlayIcon>
        </PlayControl>

        <PauseControl isVisualizing={props.isVisualizing}  tooltipContent="Pause"> 
          <PauseIcon></PauseIcon>
        </PauseControl>

        <ReplayControl isVisualizing={props.isVisualizing}>
          <ReplayIcon></ReplayIcon>
        </ReplayControl>

        <StepForwardControl isVisualizing={props.isVisualizing}>
          <StepForwardIcon></StepForwardIcon>
        </StepForwardControl>

        <SkipForwardControl isVisualizing={props.isVisualizing}>
          <SkipForwardIcon></SkipForwardIcon>
        </SkipForwardControl>
     
    </BottomMenuContainer>
  );
};

export default BottomMenu;
