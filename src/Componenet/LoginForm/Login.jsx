import React from "react";
import loginImg from "../../assets/login.png";

const Login = () => {
  return (
    <div className="container mx-auto bg-gray-800 mt-10 md:mt-25 p-10 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <img className="rounded-2xl" src={loginImg} alt="" />
      </div>
      <div className="px-2md:px-20">
        <h1 className="text-white text-center font-bold text-5xl">
          Creat an account
        </h1>
        <p className="mt-3 text-white text-center">
          Already have an account?{" "}
          <a className="underline" href="login">
            Log in
          </a>
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4">
          <div>
            <input
              className="w-full bg-gray-700 text-white pl-5 py-4 rounded-xl outline-0"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div>
            <input
              className="w-full bg-gray-700 text-white pl-5 py-4 rounded-xl outline-0"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>

        <input
          className="w-full mt-5 bg-gray-700 text-white pl-5 py-4 rounded-xl outline-0"
          type="email"
          placeholder="Enter Your Email"
        />

        <input
          className="w-full mt-5 bg-gray-700 text-white pl-5 py-4 rounded-xl outline-0"
          type="password"
          placeholder="Enter Your Password"
        />

          <button className="mt-10 mx-auto w-full bg-indigo-500 text-white font-bold py-4 rounded-xl cursor-pointer hover:bg-indigo-600 hover:transition duration-400">Creat Account</button>
      </div>
    </div>
  );
};

export default Login;
