import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login(email.current.value, password.current.value);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="m-10">
      <form className="bg-white w-96 p-8 mx-auto border-2 border-black rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-semibold mb-2">
            Email
          </label>
          <input
            className="w-full px-4 py-2 rounded-md border border-black focus:outline-none focus:border-green-500"
            type="text"
            name="email"
            placeholder="Enter your email"
            ref={email}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-semibold mb-2">
            Password
          </label>
          <input
            className="w-full px-4 py-2 rounded-md border border-black focus:outline-none focus:border-green-500"
            type="password"
            name="password"
            placeholder="Enter your password"
            ref={password}
          />
        </div>
        <div className="text-center">
          <button
            className="w-full bg-green-500 text-white font-bold py-2 rounded-md focus:outline-none focus:shadow-outline-green transition-transform hover:scale-105"
            type="button"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
