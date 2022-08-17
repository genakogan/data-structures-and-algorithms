// Genady Kogan
import React, { ReactElement } from "react";
import Modal from "./Modal/Modal";

interface Props {
  isVisible: boolean;
  onExit: () => void;
}

const WindowHTA: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <Modal isVisible={props.isVisible} onExit={props.onExit}>
      <div style={{ width: "600px", height: "500px" }}>
        <div>1</div>
        <div>2</div>
      </div>
    </Modal>
  );
};
export default WindowHTA;
