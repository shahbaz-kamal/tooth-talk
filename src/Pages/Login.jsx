import React, { useContext } from "react";

import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const { handleLogInUser, handleGoogleSignInUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  //   console.log(location.pathname);
  //  handleRegisterUser,
  // handleLogInUser,
  // handleLogOutUser,
  // handleGoogleSignInUser,

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    handleGoogleSignInUser().then((res) => {
      navigate(location.state);
    });
    console.log(location.pathname);
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    handleLogInUser(email, password)
      .then((result) => {
        navigate(location.pathname);
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <div className="flex items-center justify-center flex-col min-h-screen pb-10">
      <div>
        <h1 className="font-bold text-5xl mb-6">Login</h1>
      </div>
      <div className="bg-base-100 rounded-lg w-full md:w-[50%] lg:w-[40%]">
        <div
          onClick={handleGoogleSignIn}
          className="px-[2rem] pt-[2rem] justify-center items-center w-full"
        >
          <button className="flex gap-2 items-center justify-center bg-base-200 w-full py-2 rounded-full">
            <FcGoogle size={22}></FcGoogle>
            <span>Sign in with Google</span>
          </button>
        </div>
        <div className="divider px-[2rem] my-5">OR</div>
        <form onSubmit={handleLogIn} className="card-body mt-0 pt-0">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="bg-color-tertiary border-color-tertiary font-bold text-black rounded-md py-3 px-4 hover:bg-color-secondary hover:border-color-secondary transition duration-300">
              Login
            </button>
          </div>
        </form>

        {error && (
          <p className="px-[2rem] font-bold text-red-500 text-center">
            {error}
          </p>
        )}

        <p className="p-[2rem] text-center font-semibold">
          New to this Website?{" "}
          <span className="text-red-500 font-bold">
            <Link to={"/register"}>Register Now</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
