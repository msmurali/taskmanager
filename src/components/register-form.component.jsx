import React from "react";

const RegisterForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const changeHandler = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.value === "confirm-password") {
      setConfirmPassword(e.target.value);
    }
  };

  const submitHandler = () => {};

  return (
    <div className="register-form w-full h-full overflow-y-auto font-primary">
      <form
        onSubmit={submitHandler}
        className="w-full h-full p-6 md:w-1/2 mx-auto flex flex-col justify-evenly items-stretch"
      >
        <h1 className="title mt-8 font-medium text-lg text-center">Register</h1>
        <div className="form-group mt-8">
          <label htmlFor="email" className="block text-sm mb-1">
            Email
          </label>
          <input
            type="text"
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
            type="text"
            name="password"
            id="password"
            className="bg-gray-100 w-full px-4 py-2 border-2 border-gray-200 focus:border-purple-700 outline-none rounded-md"
            required
            value={password}
            onChange={changeHandler}
          />
        </div>
        <div className="form-group mt-8">
          <label htmlFor="confirm-password" className="block text-sm mb-1">
            Confirm password
          </label>
          <input
            type="text"
            name="confirm-password"
            id="confirm-password"
            className="bg-gray-100 w-full px-4 py-2 border-2 border-gray-200 focus:border-purple-700 outline-none rounded-md"
            required
            value={confirmPassword}
            onChange={changeHandler}
          />
        </div>
        <button
          type="submit"
          className="mt-10 register-btn block w-full px-4 py-2 rounded bg-purple-700 text-white shadow-lg active:shadow-none"
        >
          Register
        </button>
        <p className="text-sm mt-4 text-center">
          Already have an account?
          <a href="#" className="text-purple-700">
            {" "}
            sign in
          </a>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
