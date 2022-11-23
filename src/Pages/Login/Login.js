import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useToken from "../../hooks/useToken";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signIn } = useContext(AuthContext);

  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    // console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        setLoginUserEmail(user?.email);
      })
      .catch((err) => {
        // console.log(err.message);
        setLoginError(err.message);
      });
  };
  return (
    <div className="flex justify-center items-center lg:min-h-screen">
      <div className="h-[520px] w-[350px] lg:w-[385px] p-8">
        <div>
          <h2 className="text-xl text-center mb-8">Login</h2>
          <form onSubmit={handleSubmit(handleLogin)}>
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
                    value: 6,
                    message: "Password must be 6 characters or longer",
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
                value="Login"
                className="btn btn-accent w-full"
              />
            </div>
            <div>
              {loginError && (
                <p className="text-center text-red-600">{loginError}</p>
              )}
            </div>
          </form>
          <p className="text-center mt-2">
            <small>
              New to Doctors Portal?
              <span className="text-primary ml-2">
                <Link to="/signup">Create new account</Link>
              </span>
            </small>
          </p>
          <div className="divider">OR</div>
          <SocialLogin setLoginError={setLoginError}></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
