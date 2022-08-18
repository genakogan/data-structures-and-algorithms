// Genady Kogan
import React, { ReactElement } from "react";
import Modal from "./Modal/Modal";
import NikaCarousel from "./NikaCarousel/NikaCarousel";

interface Props {
  isVisible: boolean;
  onExit: () => void;
}

const TeamWindow: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <Modal isVisible={props.isVisible} onExit={props.onExit}>
      <div style={{ width: "600px", height: "500px" }}>
        <NikaCarousel>
          <div>1</div>
          <div>2</div>
        </NikaCarousel>
      </div>
    </Modal>
  );
};
export default TeamWindow;
