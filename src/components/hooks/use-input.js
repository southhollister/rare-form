import { useState } from "react";

/**
 * @typedef {Object} inputStateHandler
 * @property {string} value
 * @property {boolean} isValid
 * @property {boolean} hasError
 * @property {function} valueChangeHandler
 * @property {function} blurHandler
 * @property {function} reset
 */

/**
 * @function useInput
 * @param {function(string): boolean} validateValue - function to validate entered value
 * @returns {inputStateHandler}
 *    Return the inputs value and error states
 *    and expose event listeners for changing an inputs value and 
 *    tracking its' focus
 */
const useInput = (validateValue) => {
  // Manage state of an input field
  const [enteredValue, setEnteredValue] = useState("");
  const [wasTouched, setWasTouched] = useState(false);

  // Infer states of validity and error
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && wasTouched;

  const valueChangeHandler = event => {
    setEnteredValue(event.target.value);
  }

  const blurHandler = event => {
    setWasTouched(true);
  }

  const reset = () => {
    setEnteredValue("");
    setWasTouched(false);
  }
  // Return the inputs value and error states
  // and expose event listeners for changing an inputs value and 
  // tracking its' focus
  return {
    value: enteredValue,
    isVaild: valueIsValid,
    hasError,  // same as hasError: hasError because it has the same name
    valueChangeHandler,
    blurHandler,
    reset
  }
}

export default useInput;