// node icon import
import { ReactComponent as addIcon } from "./images/NodeIcons/add.svg";
import { ReactComponent as deleteIcon } from "./images/NodeIcons/delete.svg";

// edge icon import
import { ReactComponent as undirectedIcon } from "./images/EdgeIcons/undirected.svg";
import { ReactComponent as directedIcon } from "./images/EdgeIcons/directed.svg";

// move control icon import
import { ReactComponent as skipForward } from "./images/MoveControl/skipForward.svg";
import { ReactComponent as stepForward } from "./images/MoveControl/stepForward.svg";
import { ReactComponent as replay } from "./images/MoveControl/replay.svg";
import { ReactComponent as pause } from "./images/MoveControl/pause.svg";
import { ReactComponent as play } from "./images/MoveControl/play.svg";

const assets = {
  images: {
    // node icon
    deleteIcon: deleteIcon,
    addIcon: addIcon,

    // edge icon
    undirectedIcon: undirectedIcon,
    directedIcon: directedIcon,

    // move control icon
    skipForward: skipForward,
    stepForward: stepForward,
    replay: replay,
    pause: pause,
    play: play,
  },
};

export default assets;
