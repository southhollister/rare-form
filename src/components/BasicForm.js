import { useState } from "react";

const BasicForm = (props) => {
  const [enteredFName, setEnteredFName] = useState("");
  const [fnameWasTouched, setFNameWasTouched] = useState(false);
  const fnameIsValid = enteredFName.trim() != "";
  const fnameHasError = !fnameIsValid && fnameWasTouched;
  
  const [enteredLName, setEnteredLName] = useState("");
  const [lnameWasTouched, setLNameWasTouched] = useState(false);
  const lnameIsValid = enteredLName.trim() != "";
  const lnameHasError = !lnameIsValid && lnameWasTouched;
  
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailWasTouched, setEmailWasTouched] = useState(false);
  const emailIsValid = enteredEmail.trim() != "" && enteredEmail.includes('@');
  const emailHasError = !emailIsValid && emailWasTouched;
  
  return (
    <form>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" />
        </div>
        <div className="form-control">
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="email">E-Mail Address</label>
        <input type="text" id="email" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
