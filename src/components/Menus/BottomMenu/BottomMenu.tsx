import React, { ReactElement, useState } from "react";
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
import Titles from "../../Common/Titles";

interface Props {
  
}

const BottomMenu: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <BottomMenuContainer>
      <Row justifyContent="space-between" margin="0px 30px">
        <Slider width="200px">
          <input
            type="range"
            className="slider"
            min={0.5}
            max={1.5}
            step={0.1}
          />
        </Slider>

        <Titles
          fontSize="15px"
          underline=""
          cursor=""
          userSelect=""
          marginLeft="20px"
          marginRight="20px"
        >
          1x
        </Titles>
        <Titles
          fontSize="15px"
          underline=""
          cursor=""
          userSelect=""
          marginLeft="0px"
          marginRight="20px"
        >
          Speed
        </Titles>

        <Slider width="300px">
          <input
            type="range"
            className="slider"
            min={0.5}
            max={1.5}
            step={0.1}
          />
        </Slider>

        <Titles
          fontSize="15px"
          underline=""
          cursor=""
          userSelect=""
          marginLeft="20px"
          marginRight="20px"
        >
          Steps
        </Titles>
      </Row>

      {/*move control buttons*/}
      <Row justifyContent="space-between" margin="0px 30px">
        <SkipBackControl>
          <SkipBackIcon></SkipBackIcon>
        </SkipBackControl>

        <StepBackControl>
          <StepBackIcon></StepBackIcon>
        </StepBackControl>

        <PlayControl>
          <PlayIcon></PlayIcon>
        </PlayControl>

        <PauseControl>
          <PauseIcon></PauseIcon>
        </PauseControl>

        <ReplayControl>
          <ReplayIcon></ReplayIcon>
        </ReplayControl>

        <StepForwardControl>
          <StepForwardIcon></StepForwardIcon>
        </StepForwardControl>

        <SkipForwardControl>
          <SkipForwardIcon></SkipForwardIcon>
        </SkipForwardControl>
      </Row>
    </BottomMenuContainer>
  );
};

export default BottomMenu;
