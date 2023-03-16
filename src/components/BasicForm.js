import useInput from "./hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = () => {
  const {
    value: enteredFirstname,
    isValid: firstnameIsValid,
    hasError: firstnameHasError,
    valueChangeHandler: firstnameChangeHandler,
    inputBlurHandler: firstnameBlurHandler,
    reset: firstnameResetHander,
  } = useInput(isNotEmpty);
  const {
    value: enteredLastname,
    isValid: lastnameIsValid,
    hasError: lastnameHasError,
    valueChangeHandler: lastnameChangeHandler,
    inputBlurHandler: lastnameBlurHandler,
    reset: lastnameResetHander,
  } = useInput(isNotEmpty);
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailResetHander,
  } = useInput(isEmail);

  let formIsValid = false;

  if (firstnameIsValid && lastnameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    firstnameResetHander();
    lastnameResetHander();
    emailResetHander();
    console.log(enteredFirstname);
    console.log(enteredLastname);
    console.log(enteredEmail);
  };

  // CSS classes handler
  const firstnameInputClasses = firstnameHasError
    ? "form-control invalid"
    : "form-control";
  const lastnameInputClasses = lastnameHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formHandler}>
      <div className="control-group">
        <div className={firstnameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstnameChangeHandler}
            onBlur={firstnameBlurHandler}
            value={enteredFirstname}
          />
          {firstnameHasError && (
            <p className="error-text">Firstname is required</p>
          )}
        </div>
        <div className={lastnameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastnameChangeHandler}
            onBlur={lastnameBlurHandler}
            value={enteredLastname}
          />
          {lastnameHasError && (
            <p className="error-text">Lastname is required</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailHasError && <p className="error-text">Valid email is required</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
