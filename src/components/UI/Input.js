import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {

  return (
    <div className={props.className}>
      <label htmlFor={props.input.id}>{props.labelText}</label>
      <input ref={ref} className={`${classes.input}`} {...props.input} />
    </div>
  );
});

export default Input;
