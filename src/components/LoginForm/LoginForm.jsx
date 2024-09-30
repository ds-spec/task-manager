import "./LoginForm.css";
import desert from "../../assets/desert.jpg";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { FaSquareCheck } from "react-icons/fa6";
import { MdError } from "react-icons/md";

const LoginForm = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [formData, setFormData] = useState(null);
  const [isAccount, setIsAccount] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isError, setIsError] = useState(false);
  console.log(isAccount);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setFormData(data);
    setIsCreating(true);
  };

  const handleCheckboxChange = (e) => {
    setIsAgreed(e.target.checked);
  };

  useEffect(() => {
    const handleFormData = async (data) => {
      if (!data) return;
      try {
        const response = await fetch(
          "https://66fb2a188583ac93b40b071a.mockapi.io/createaccount",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          }
        );
        const result = await response.json();
        console.log(result);
        // setTimeout(() => {
        //   setIsAccount(true);
        // }, 5000);
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
    handleFormData(formData);
  }, [formData, isAgreed, reset]);

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
          <form id="form" onSubmit={handleSubmit(onSubmit)}>
            <h1>Create an account</h1>
            <h4>
              Already have an account? <span>Log in</span>
            </h4>
            <div id="input-div">
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
              <div className="name-error">
                <input
                  type="email"
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
                    {errors.password.message || "Please enter password"}
                  </p>
                )}
              </div>
              {/* <h5> */}
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
              {/* </h5> */}
            </div>
            <button disabled={!isAgreed} type="submit">
              Create account
            </button>
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
