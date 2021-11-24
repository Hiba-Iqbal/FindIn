import React from "react";
import { Modal as BSModal } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";

const Modal = ({
  show = false,
  backdropClassName = "",
  className = "center lg c-media-picker",
  backdrop = "static",
  keyboard = false,
  onHide = null,
  children,
}) => {
  return (
    <BSModal
      backdropClassName={backdropClassName}
      show={show}
      backdrop={backdrop}
      onHide={onHide}
      keyboard={keyboard}
      className={`c-modal ${className}`}>
      <button type="button" className="close" onClick={onHide}>
        <IoMdClose />
      </button>

      {children}
    </BSModal>
  );
};
export default Modal;
