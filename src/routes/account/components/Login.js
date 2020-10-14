import React, { useState, useContext } from "react";
import "../styles/login.css";
import { loginUser } from "../../../UserApi";
import { UserContext } from "../../../UserContext";

export default function Login() {
  // username and password the user has entered in form below
  const [usernameInput, setUsernameInput] = useState();
  const [passwordInput, setpasswordInput] = useState();

  // sets if the user has been authorized/verified to the app level context
  const { setAuthorizedUser } = useContext(UserContext);

  // inits after the login form below is submitted.
  const handleSubmit = async (e) => {
    // prevents page from refreshing
    e.preventDefault();
    // sets loginStatus as a promise from the UserApis' loginUser function.
    let loginStatus = await loginUser(
      usernameInput.toLowerCase().trim(),
      passwordInput.toLowerCase().trim()
    );
    // sets the authorized user for the entire app.
    await setAuthorizedUser(loginStatus);
  };

  // User login form. Sets username and password states when changed.
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="username"
          name="username"
          onChange={(e) => {
            setUsernameInput(e.target.value);
          }}
        ></input>
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => {
            setpasswordInput(e.target.value);
          }}
        ></input>
        <br />
        <input type="submit" value="Login"></input>
        <br />
        <a href="/createAccount">Create A New Account</a>
      </form>
    </div>
  );
}
