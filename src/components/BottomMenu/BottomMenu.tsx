import React, { ReactElement } from "react";
import BottomMenuContainer from "./BottomMenuContainer";
import PlayControl from "./MoveControl/PlayControl";
import {
  PauseIcon,
    PlayIcon, ReplayIcon, SkipBackIcon, SkipForwardIcon, StepBackIcon, StepForwardIcon,
}from "./MoveControl/OptionIcons";
import SkipForwardControl from "./MoveControl/SkipForwardControl";
import StepForwardControl from "./MoveControl/StepForwardControl";
import ReplayControl from "./MoveControl/ReplayControl";
import PauseControl from "./MoveControl/PauseControl";
import StepBackControl from "./MoveControl/StepBackControl";
import SkipBackControl from "./MoveControl/SkipBackControl";
import Slider from "../Common/Slider";
import Row from "../Common/Row";

const VisualizeButton: React.FC = (): ReactElement => {
  return (
    <BottomMenuContainer>
       <Row justifyContent="space-between" margin="0 26px">
       <Slider>
        <input
          type="range"
          className="slider"
          min={0.5}
          max={1.5}
          step={0.1}          
        />
      </Slider>
      </Row>
      
      
      {/*move control buttons*/}
      {/*skip forwar button*/}
      <SkipForwardControl >
        <SkipForwardIcon></SkipForwardIcon>
      </SkipForwardControl>

      {/*step forwar button*/}
      <StepForwardControl >
        <StepForwardIcon></StepForwardIcon>
      </StepForwardControl>

      {/*replay button*/}
      <ReplayControl >
        <ReplayIcon></ReplayIcon>
      </ReplayControl>

      {/*pause button*/}
      <PauseControl >
        <PauseIcon></PauseIcon>
      </PauseControl>

      {/*play button*/}
      <PlayControl >
        <PlayIcon></PlayIcon>
      </PlayControl>

      {/*step forward button*/}
      <StepBackControl >
        <StepBackIcon></StepBackIcon>
      </StepBackControl>

      {/*skip forward button*/}
      <SkipBackControl >
        <SkipBackIcon></SkipBackIcon>
      </SkipBackControl>
    </BottomMenuContainer>

    
  );
};

export default VisualizeButton;
