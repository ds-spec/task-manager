import "./LoginForm.css";
import desert from "../../assets/desert.jpg";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { FaSquareCheck } from "react-icons/fa6";
import { MdError } from "react-icons/md";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const LoginForm = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [isAccount, setIsAccount] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [invalidUser, setInvalidUser] = useState(false);
  console.log(isAccount);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsCreating(true);
    if (!data) return;
    try {
      const { email, password } = data;
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response.user);
      setIsAccount(true);
      setIsAgreed(false);
      setIsCreating(false);
      reset();
    } catch (err) {
      setIsCreating(false);
      setIsError(true);
      console.log(err);
    }
  };

  const handleLoginData = async (data) => {
    if (!data) return;
    const { email, password } = data;
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response.user, "User logged in");
      reset();
    } catch (err) {
      console.log(err);
      setInvalidUser(true);
      console.log("Invalid email or password");
    }
  };

  const handleCheckboxChange = (e) => {
    setIsAgreed(e.target.checked);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsError(false);
    }, 2000);
  }, [isError]);

  useEffect(() => {
    setTimeout(() => {
      setIsAccount(false);
    }, 2000);
  }, [isAccount]);

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
                Dont have an account?{" "}
                <span onClick={() => setIsLogin(false)}>Create Account</span>
              </h4>
            ) : (
              <h4>
                Already have an account?{" "}
                <span onClick={() => setIsLogin(true)}>Log in</span>
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
                {errors.password && (
                  <p id="error">
                    {invalidUser
                      ? "Invalid username or password"
                      : errors.password.message}
                  </p>
                )}
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
              <h5 id="account-created">
                <FaSquareCheck />
                Account Created Successfully
              </h5>
            )}
            {isError && (
              <h5 id="account-error">
                <MdError />
                Something went wrong
              </h5>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
