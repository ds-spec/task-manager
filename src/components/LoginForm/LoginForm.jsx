import "./LoginForm.css";
import desert from "../../assets/desert.jpg";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { FaSquareCheck } from "react-icons/fa6";
import { MdError } from "react-icons/md";
import { auth, db } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";

// Seperate error message
const ErrorMessage = ({ message }) => <h5 id="account-error">{message}</h5>;

// Seperate success message

const SuccessMessage = ({ message }) => (
  <h5 id="account-created">
    <FaSquareCheck />
    {message}
  </h5>
);

const LoginForm = () => {
  const navigate = useNavigate();
  const db = getFirestore();
  const [isAgreed, setIsAgreed] = useState(false);
  const [isAccount, setIsAccount] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [invalidUser, setInvalidUser] = useState(false);
  const [userExists, setUserExists] = useState(false);
  console.log(isAccount);
  console.log(isError, "errorrrr");
  console.log(invalidUser, "invalidUserinvalidUser");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const setSuccess = (message, type) => {
    if (type === "login") {
      setIsAccount(false);
      navigate("/dashboard");
    } else {
      setIsAccount(true);
    }
    reset();
    setTimeout(() => setIsAccount(false), 3000); // Display success for 3 seconds
  };

  const setError = (message, type) => {
    if (!userExists) {
      if (type === "login") {
        setInvalidUser(true);
        setIsError(false);
      } else {
        setInvalidUser(false);
        setIsError(true);
      }
      setTimeout(() => {
        setInvalidUser(false);
        setIsError(false);
      }, 3000);
    } else {
      setTimeout(() => {
        setUserExists(false);
      }, 3000);
    } // Display error for 3 seconds
  };

  const switchToCreateAccount = (type) => {
    if (type === "register") {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
    reset();
  };

  const onSubmit = async (data) => handleAuthAction(data, "register");
  const handleLoginData = async (data) => handleAuthAction(data, "login");

  const handleAuthAction = async (data, action) => {
    console.log(action, "actionsss");
    setIsCreating(true);
    const { email, password, firstName } = data;
    console.log(data);
    try {
      const response =
        action === "register"
          ? await createUserWithEmailAndPassword(auth, email, password)
          : await signInWithEmailAndPassword(auth, email, password);
      console.log(response.user);
      if (action === "register") {
        await setDoc(doc(db, "users", user.uid), {
          displayName: firstName,
        });
      }

      setSuccess(
        action === "register"
          ? "Account Created Successfully"
          : "User logged in",
        action
      );
    } catch (error) {
      console.log(error.code, "codeerrro");
      if (error.code === "auth/email-already-in-use") {
        setUserExists(true);
      }
      setError(
        action === "register"
          ? "Something went wrong"
          : "Invalid email or password",
        action
      );
    } finally {
      setIsCreating(false);
    }
  };

  const handleCheckboxChange = (e) => {
    setIsAgreed(e.target.checked);
  };

  return (
    <div id="loginpage">
      <div id="login-form-div">
        <img src={desert} alt="" />
        {isCreating ? (
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        ) : (
          <form
            id="form"
            onSubmit={handleSubmit(isLogin ? handleLoginData : onSubmit)}
          >
            <h1>{isLogin ? "Login your account" : "Create an account"}</h1>
            {isLogin ? (
              <h4>
                Don't have an account?{" "}
                <span onClick={() => switchToCreateAccount("register")}>
                  Create Account
                </span>
              </h4>
            ) : (
              <h4>
                Already have an account?{" "}
                <span onClick={() => switchToCreateAccount("login")}>
                  Log in
                </span>
              </h4>
            )}
            <div id="input-div">
              {!isLogin && (
                <div id="name-div">
                  <div className="name-error">
                    <input
                      id="username"
                      type="text"
                      placeholder="First Name"
                      {...register("firstName", { required: true })}
                    />
                    {errors?.firstName?.type === "required" && (
                      <p id="error">Please enter first name</p>
                    )}
                  </div>
                  <div className="name-error">
                    <input
                      type="text"
                      placeholder="Second Name"
                      {...register("secondName", { required: true })}
                    />
                    {errors?.secondName?.type === "required" && (
                      <p id="error"> Please enter second name</p>
                    )}
                  </div>
                </div>
              )}
              <div className="name-error">
                <input
                  type="email"
                  // value={email}
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Please enter a valid email",
                  })}
                />
                {errors?.email?.type === "required" && (
                  <p id="error"> Please enter a valid email</p>
                )}
              </div>
              <div className="name-error">
                <input
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                  })}
                />
                {errors.password && <p id="error">{errors.password.message}</p>}
                {invalidUser && <p id="error">Invalid username or password</p>}
              </div>
              {/* <h5> */}
              {!isLogin && (
                <div id="check-box-div">
                  <input
                    id="check"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                  />
                  <h5>
                    I agree to the<span>Terms & Conditions</span>
                  </h5>
                </div>
              )}
              {/* </h5> */}
            </div>
            {isLogin ? (
              <button type="submit">Login</button>
            ) : (
              <button disabled={!isAgreed} type="submit">
                Create account
              </button>
            )}
            {isAccount && (
              <SuccessMessage message="Account Created Successfully" />
            )}
            {isError && <ErrorMessage message="Something went wrong" />}
            {userExists && (
              <ErrorMessage message="Email is already in use. Please use a different email or log in." />
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
