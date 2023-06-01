import React from 'react';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = (props: any) => {
  return <div className={classes.backdrop}></div>;
};

type ModalProps = { children: React.ReactNode };

const ModalOverlay = (props: ModalProps) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props: ModalProps) => {
  if (!portalElement) return null;

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
