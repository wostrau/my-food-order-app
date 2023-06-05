import React from 'react';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = (props: { onClose: () => void }) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

type ModalOverlayProps = { children: React.ReactNode };
const ModalOverlay = (props: ModalOverlayProps) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');
type ModalProps = { children: React.ReactNode; onClose: () => void };
const Modal = (props: ModalProps) => {
  if (!portalElement) return null;

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
