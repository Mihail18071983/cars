import React, { useEffect } from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.scss"

export const Modal = ({ onCloseModal, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onCloseModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onCloseModal]);

  const backdpropClickHandler = (e) => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  return createPortal(
      <div className={styles.modal__container} onClick={backdpropClickHandler}>
          <div className={styles.modal}>{children}</div>
    </div>,
    document.querySelector("#modal-root")
  );
};
