import "./LoginForm.css";
import desert from "../../assets/desert.jpg";
import { useState } from "react";

const LoginForm = () => {
  const [firstName, setFirstName] = useState("");
  const [error, setError] = useState("");

  const handleFirstName = (e) => {
    const value = e.target.value;
    setFirstName(value);
    if (value.trim() === "") {
      setError("Please enter first name");
    }
  };
  console.log(firstName);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error) {
      alert("Submitted successfully");
    }
  };

  return (
    <div id="loginpage">
      <div id="login-form-div">
        <img src={desert} alt="" />
        <form id="form">
          <h1>Create an account</h1>
          <h4>
            Already have an account? <span>Log in</span>
          </h4>
          <div id="input-div">
            <div id="name-div">
              <input
                id="username"
                type="text"
                value={firstName}
                placeholder="First Name"
                onChange={handleFirstName}
                required
              />
              <p id="error">{error}</p>
              <input
                id="password"
                type="text"
                placeholder="Second Name"
                required
              />
            </div>
            <input type="email" placeholder="Enter your email" required />
            <input
              type="password"
              placeholder="Enter your password"
              required
              onInvalid={() => {}}
            />
            {/* <h5> */}
            <div id="check-box-div">
              <input id="check" type="checkbox" />
              <h5>
                I agree to the<span>Terms & Conditions</span>
              </h5>
            </div>
            {/* </h5> */}
          </div>
          <button type="submit" onClick={handleSubmit}>
            Create account
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
