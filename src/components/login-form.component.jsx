import React from "react";
import { login } from "services/auth";

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const changeHandler = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else {
      return;
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await login(email, password);
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setError("User not found");
      } else if (error.code === "auth/wrong-password") {
        setError("Invalid email or password");
      } else {
        setError("Something went wrong");
      }
    }

    setLoading(false);
  };

  return (
    <div className="login-form w-full h-full overflow-y-auto font-primary">
      <form
        onSubmit={submitHandler}
        className="w-full h-full p-6 md:w-1/2 mx-auto flex flex-col justify-evenly items-stretch"
      >
        <h1 className="title font-medium text-lg mt-8 text-center">Login</h1>
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
            className="bg-gray-100 w-full px-4 py-2 border-2 border-gray-200 focus:border-purple-700 outline-none rounded-md"
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
            minLength="6"
            id="password"
            className="bg-gray-100 w-full px-4 py-2 border-2 border-gray-200 focus:border-purple-700 outline-none rounded-md"
            required
            value={password}
            onChange={changeHandler}
          />
        </div>
        <button
          disabled={loading}
          type="submit"
          className="mt-10 register-btn block w-full px-4 py-2 rounded bg-purple-700 disabled:bg-purple-400 text-white shadow-lg active:shadow-none"
        >
          Login
        </button>
        <p className="text-sm mt-4 text-center">
          Don't have an account?
          <a href="" className="text-purple-700">
            {" "}
            sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
