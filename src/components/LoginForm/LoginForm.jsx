import "./LoginForm.css";
import desert from "../../assets/desert.jpg";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { FaGithub, FaSquareCheck } from "react-icons/fa6";
import { MdError } from "react-icons/md";
import { auth, db } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { setDoc, doc } from "firebase/firestore";
import { signInWithGooglePopup } from "../../firebase";
import { FcGoogle } from "react-icons/fc";

// Separate error message
const ErrorMessage = ({ message }) => (
  <h5 className="mt-14 text-lg font-normal flex items-center gap-4 text-red-500">
    {message}
  </h5>
);

// Separate success message
const SuccessMessage = ({ message }) => (
  <h5 className="mt-14 text-lg font-normal flex items-center gap-4 text-green-500">
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
    setTimeout(() => setIsAccount(false), 3000);
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
    }
  };

  const switchToCreateAccount = (type) => {
    setIsLogin(type !== "register");
    reset();
  };

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  const handleAuthAction = async (data, action) => {
    setIsCreating(true);
    const { email, password, firstName, secondName } = data;

    try {
      const response =
        action === "register"
          ? await createUserWithEmailAndPassword(auth, email, password)
          : await signInWithEmailAndPassword(auth, email, password);

      if (action === "register") {
        await setDoc(doc(db, "users", response.user.uid), {
          firstName,
          lastName: secondName,
        });
      }

      setSuccess(
        action === "register"
          ? "Account Created Successfully"
          : "User logged in",
        action
      );
    } catch (error) {
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

  const onSubmit = async (data) => handleAuthAction(data, "register");
  const handleLoginData = async (data) => handleAuthAction(data, "login");

  const handleCheckboxChange = (e) => {
    setIsAgreed(e.target.checked);
  };

  return (
    <div className="bg-blue-300 h-screen flex justify-center p-9">
      <div className="bg-[#2b2738] shadow-lg w-4/5 h-[91vh] rounded-lg p-4 flex gap-6">
        <img src={desert} alt="" className="w-1/2 rounded-lg object-cover" />
        {isCreating ? (
          <div className="absolute top-1/2 left-[70%] transform -translate-x-1/2 -translate-y-1/2 w-20 h-20">
            <div className="absolute border-4 border-white opacity-100 rounded-full animate-spin"></div>
            <div className="absolute border-4 border-white opacity-100 rounded-full animate-spin"></div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(isLogin ? handleLoginData : onSubmit)}
            className="flex flex-col text-white p-14 relative w-[40%]"
          >
            <h1 className="text-4xl font-normal">
              {isLogin ? "Login your account" : "Create an account"}
            </h1>
            {isLogin ? (
              <h4 className="mt-6">
                Don't have an account?{" "}
                <span
                  onClick={() => switchToCreateAccount("register")}
                  className="text-indigo-500 underline cursor-pointer"
                >
                  Create Account
                </span>
              </h4>
            ) : (
              <h4 className="mt-6">
                Already have an account?{" "}
                <span
                  onClick={() => switchToCreateAccount("login")}
                  className="text-indigo-500 underline cursor-pointer"
                >
                  Log in
                </span>
              </h4>
            )}
            <div className="mt-12 flex flex-col gap-5">
              {!isLogin && (
                <div className="flex gap-5">
                  <div>
                    <input
                      className="p-2 border border-transparent bg-[#3B364C] text-white rounded focus:border-red"
                      placeholder="First Name"
                      {...register("firstName", { required: true })}
                    />
                    {errors?.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        Please enter first name
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      className="p-2 border border-transparent bg-[#3B364C] text-white rounded focus:border-[#9382BF]"
                      placeholder="Second Name"
                      {...register("secondName", { required: true })}
                    />
                    {errors?.secondName && (
                      <p className="text-red-500 text-sm mt-1">
                        Please enter second name
                      </p>
                    )}
                  </div>
                </div>
              )}
              <div>
                <input
                  className="p-2 border border-transparent bg-[#3B364C] w-full text-white rounded focus:border-[#9382BF]"
                  placeholder="Enter your email"
                  {...register("email", { required: true })}
                />
                {errors?.email && (
                  <p className="text-red-500 text-sm mt-1">
                    Please enter a valid email
                  </p>
                )}
              </div>
              <div>
                <input
                  className="p-2 border border-transparent bg-[#3B364C] w-full text-white rounded focus:border-[#9382BF]"
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
                {errors?.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
                {invalidUser && (
                  <p className="text-red-500 text-sm mt-1">
                    Invalid username or password
                  </p>
                )}
              </div>
              {!isLogin && (
                <div className="flex items-center gap-2">
                  <input
                    className="w-5 h-5"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                  />
                  <h5 className="text-sm text-gray-400">
                    I agree to the{" "}
                    <span className="text-indigo-500">Terms & Conditions</span>
                  </h5>
                </div>
              )}
            </div>
            <button
              className={`mt-10 bg-indigo-600 py-3 px-2 rounded text-white text-sm ${
                !isAgreed && !isLogin ? "opacity-20 cursor-not-allowed" : ""
              }`}
              disabled={!isAgreed && !isLogin}
            >
              {isLogin ? "Login" : "Create account"}
            </button>
            {isAccount && (
              <SuccessMessage message="Account Created Successfully" />
            )}
            {isError && <ErrorMessage message="Something went wrong" />}
            {userExists && (
              <ErrorMessage message="Email is already in use. Please use a different email or log in." />
            )}
            <div className="flex gap-4 justify-center mt-8">
              <button
                className="border-2 px-10 py-2 flex items-center gap-3 hover:border-white transition-colors border-[#656070] rounded"
                onClick={logGoogleUser}
              >
                <span>
                  <FcGoogle size={"1.4em"} />
                </span>
                Google
              </button>
              <button
                className="border-2 flex items-center gap-3 px-10 hover:border-white transition-colors py-2 border-[#656070] rounded"
                onClick={logGoogleUser}
              >
                <span>
                  <FaGithub size={"1.4em"} />
                </span>
                Github
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
