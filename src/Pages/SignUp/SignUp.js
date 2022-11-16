import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const { createUser, updateUser } = useContext(AuthContext);

  const [signupError, setSignupError] = useState("");

  const handleSignup = (data) => {
    console.log(data);
    setSignupError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User created successfully");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            navigate("/");
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.error(err);
        setSignupError(err.message);
      });
  };
  return (
    <div className="flex justify-center items-center lg:min-h-screen">
      <div className="h-[620px] w-[350px] lg:w-[385px] shadow-xl rounded-xl p-8">
        <div>
          <h2 className="text-xl text-center mb-8">Sign Up</h2>
          <form onSubmit={handleSubmit(handleSignup)}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                {...register("name", {
                  required: "Name is required",
                })}
                className="input input-bordered w-full"
              />
              {errors.name && (
                <p className="text-red-600">{errors.name?.message}</p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email Address is required",
                })}
                className="input input-bordered w-full"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message:
                      "Password must be 8 characters or longer and special character",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8}/,
                    message: "Password must be strong",
                  },
                })}
                className="input input-bordered w-full"
              />
              <label className="label">
                <span className="label-text">Forget Password?</span>
              </label>
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
            </div>

            <div className="flex justify-center mt-5">
              <input
                type="submit"
                value="Signup"
                className="btn btn-accent w-full"
              />
            </div>
            <div>
              {signupError && (
                <p className="text-center text-red-600">{signupError}</p>
              )}
            </div>
          </form>
          <p className="text-center mt-2">
            <small>
              Already have an account?
              <span className="text-primary ml-2">
                <Link to="/login">Login</Link>
              </span>
            </small>
          </p>
          <div className="divider">OR</div>
          <button className="btn btn-outline w-full">
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
