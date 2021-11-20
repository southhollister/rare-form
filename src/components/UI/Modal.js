import classes from "./Modal.module.css";

import ReactDOM from "react-dom";

import Card from "./Card";
import React, {
  Fragment,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

const Modal = React.forwardRef((props, ref) => {
  const [fadeInOut, setFadeInOut] = useState("fadeIn");
  const modalClasses = `${classes.modal_backdrop} ${fadeInOut}`;

  // Using this function for imperativeHandle
  const closeModal = () => {
    setFadeInOut("fadeOut");
  };

  const onClickHandler = (event) => {
    event.stopPropagation();
    closeModal();
  };

  useImperativeHandle(ref, () => {
    return {
      closeModal: closeModal,
    };
  });

  const { onToggleModal } = props;
  useEffect(() => {
    let toggleTimeout;
    if (fadeInOut === "fadeOut") {
      toggleTimeout = setTimeout(() => {
        onToggleModal();
      }, 500);
    }
    return () => {
      if (toggleTimeout) {
        clearTimeout(toggleTimeout);
      }
    };
  }, [fadeInOut, onToggleModal]);

  const view = (
    <div onClick={onClickHandler} className={modalClasses}>
      <Card
        className={`${props.className} ${classes.modal}`}
        onClick={(event) => event.stopPropagation()}
      >
        <header className={props.type}>
          <div className={classes.icon}>{props.icon}</div>
          <h1>{props.header}</h1>
        </header>
        <div className={classes.modal_content}>{props.children}</div>
      </Card>
    </div>
  );
  return (
    <Fragment>
      {ReactDOM.createPortal(view, document.getElementById("overlays"))}
    </Fragment>
  );
});

export default Modal;
