import Modal from "./UI/Modal";
import Button from "./UI/Button";
// import { useEffect, useState } from "react";
import useInput from "./hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: isValidName,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: isValidEmail,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.trim() !== "" && value.includes("@", 1));

  const isValidForm = isValidName && isValidEmail;
  console.log(isValidName, isValidEmail);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!isValidName || !isValidEmail) {
      return;
    }

    console.log(enteredName);
    resetName();
    resetEmail();
  };

  return (
    <Modal onToggleModal={() => {}} className="form-modal">
      <form onSubmit={onSubmitHandler}>
        <div
          className={
            !nameInputHasError ? "form-control" : "form-control invalid"
          }
        >
          <label htmlFor="name">Your Name</label>
          {nameInputHasError && (
            <p className="validation">Name field cannot be blank.</p>
          )}
          <input
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            id="name"
          />
        </div>
        <div
          className={
            !emailInputHasError ? "form-control" : "form-control invalid"
          }
        >
          <label htmlFor="email">Email</label>
          {emailInputHasError && (
            <p className="validation">Email field cannot be blank.</p>
          )}
          <input
            type="text"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            id="email"
          />
        </div>
        <div className="form-actions">
          <Button disabled={!isValidForm}>Submit</Button>
        </div>
      </form>
    </Modal>
  );
};

export default SimpleInput;
