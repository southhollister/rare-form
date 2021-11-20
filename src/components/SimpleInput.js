import Modal from "./UI/Modal";
import Button from "./UI/Button";
import { useEffect, useState } from "react";
import useInput from "./hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: isValidName,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    reset: resetName
  } = useInput(value => value.trim() !== '');
  
  const [emailInputTouched, setEmailInputTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const isValidEmail =
    enteredEmail.trim() !== "" && enteredEmail.includes("@", 1);
  const isInvalidEmailInput = !isValidEmail && emailInputTouched;

  const isValidForm = isValidName && isValidEmail;
  console.log(isValidName, isValidEmail);

  const onBlurHandler = (event) => {
    if (event.target.id === "email") {
      setEmailInputTouched(true);
    }
  };

  const onChangeHandler = (event) => {
    if (event.target.id === "email") {
      setEnteredEmail(event.target.value);
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    setEmailInputTouched(true);

    if (!isValidName || !isValidEmail) {
      return;
    }

    console.log(enteredName);
    resetName();
    setEnteredEmail("");
    setEmailInputTouched(false);
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
            !isInvalidEmailInput ? "form-control" : "form-control invalid"
          }
        >
          <label htmlFor="email">Email</label>
          {isInvalidEmailInput && (
            <p className="validation">Email field cannot be blank.</p>
          )}
          <input
            type="text"
            value={enteredEmail}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
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
