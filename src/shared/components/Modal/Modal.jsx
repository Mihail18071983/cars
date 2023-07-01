import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import styles from '../Modal/Modal.module.scss';
import { CgClose } from 'react-icons/cg';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, close }) => {

    const closeModal = useCallback(({ target, currentTarget, code }) => {
      if (target === currentTarget || code === 'Escape') {
        close();
      }
    },[close]);

  useEffect(() => {
    window.addEventListener('keydown', closeModal);
     return ()=> window.removeEventListener('keydown', closeModal);
  }, [closeModal]);


  return createPortal(
    <div className={styles.Overlay} onClick={closeModal}>
      <div className={styles.Modal}>
        <button
          type="button"
          aria-label="close button"
          className={styles.close}
          onClick={close}
        >
          <CgClose />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};
