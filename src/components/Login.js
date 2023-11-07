import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const handleToggle = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="brightness-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="back-ground-img"
        />
      </div>
      <form className="w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 text-white bg-black bg-opacity-60">
        <p className="text-2xl font-bold my-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </p>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="email"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />

        <input
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full  bg-gray-700 rounded-lg"
        />
        {!isSignInForm && (
          <input
            type="password"
            placeholder="confirm-password"
            className="p-4 my-4 w-full  bg-gray-700 rounded-lg"
          />
        )}
        <button className="p-4 my-6 bg-red-600 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="cursor-pointer" onClick={handleToggle}>
          {isSignInForm
            ? " New to Netflix? Sign Up"
            : "Already a User? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
