import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { handleRegisterUser, user, manageProfile } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    // console.log(name, email, photo, password);
    if (password.length < 6) {
      setError("Password must contain at least 6 characters");
      return;
    }
    if (!/.*[a-z].*/.test(password)) {
      setError("password must contain at least 1 lowercase letter");
      return;
    }
    if (!/.*[A-Z].*/.test(password)) {
      setError("password must contain at least 1 Uppercase letter");
      return;
    }
    handleRegisterUser(email, password)
      .then((result) => {
        manageProfile(name, photo);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <div className="flex items-center justify-center flex-col min-h-screen pb-10">
      <div>
        <h1 className="font-bold text-5xl mb-6">Register</h1>
      </div>
      <div className="bg-base-100 rounded-lg w-full md:w-[50%] lg:w-[40%]">
        <form onSubmit={handleRegister} className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter Your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Enter Your photo URL"
              className="input input-bordered"
              required
            />
          </div>
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
          </div>
          <div className="form-control mt-6">
            <button className=" bg-color-tertiary border-color-tertiary font-bold text-black rounded-md py-3 px-4 hover:bg-color-secondary hover:border-color-secondary transition duration-300">
              Register
            </button>
          </div>
        </form>

        {error && (
          <p className="px-[2rem] font-bold text-red-500 text-center">
            {error}
          </p>
        )}

        <p className="p-[2rem] text-center font-semibold">
          Already have an account?{" "}
          <span className="text-red-500 font-bold">
            <Link to={"/login"}>Log in Now</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
