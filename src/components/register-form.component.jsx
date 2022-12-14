import React from "react";
import { register } from "services/auth.js";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "contexts/theme-context";
import { ThemeMode } from "contexts/theme-context";

const RegisterForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const { theme } = useTheme();
  const navigateTo = useNavigate();

  const changeHandler = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "confirmPassword") {
      setConfirmPassword(e.target.value);
    } else {
      return;
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setConfirmPassword("");
      return;
    }

    try {
      await register(email, password);
      navigateTo("/dashboard");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("Email already exists");
      } else {
        setError("Error");
      }
    }

    setLoading(false);
  };

  return (
    <div
      className={`register-form w-full h-full overflow-y-auto font-primary ${
        theme === ThemeMode.LIGHT ? "text-black" : "text-white"
      }`}
    >
      <form
        onSubmit={submitHandler}
        className="w-full h-full p-6 md:w-1/2 mx-auto flex flex-col justify-evenly items-stretch"
      >
        <h1 className="title mt-8 font-medium text-lg text-center">Register</h1>
        {error && (
          <span className="text-red-500 text-sm px-4 py-2 bg-red-200 mt-8 rounded">
            {error}
          </span>
        )}
        <div className="form-group mt-8">
          <label htmlFor="email" className="block text-sm mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="text-black bg-gray-100 w-full px-4 py-2 border-2 border-gray-200 focus:border-purple-700 outline-none rounded-md"
            required
            value={email}
            onChange={changeHandler}
          />
        </div>
        <div className="form-group mt-8">
          <label htmlFor="password" className="block text-sm mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="text-black bg-gray-100 w-full px-4 py-2 border-2 border-gray-200 focus:border-purple-700 outline-none rounded-md"
            required
            value={password}
            onChange={changeHandler}
            minLength="6"
          />
        </div>
        <div className="form-group mt-8">
          <label htmlFor="confirmPassword" className="block text-sm mb-1">
            Confirm password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className="text-black bg-gray-100 w-full px-4 py-2 border-2 border-gray-200 focus:border-purple-700 outline-none rounded-md"
            required
            value={confirmPassword}
            minLength="6"
            onChange={changeHandler}
          />
        </div>
        <button
          disabled={loading}
          type="submit"
          onSubmit={submitHandler}
          className="mt-10 register-btn block w-full px-4 py-2 rounded bg-purple-700 text-white shadow-lg active:shadow-none"
        >
          Register
        </button>
        <p className="text-sm mt-4 text-center">
          Already have an account?
          <Link to="/login" className="text-purple-700">
            {" "}
            sign in{" "}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
