import React, { useContext } from "react";
import "../styles/login.css";
import { loginUser } from "../../../UserApi";
import { saveUserToSessionStorage } from "../../../SessionStorageApi";
import { UserContext } from "../../../UserContext";
import useForm from "../../../utils/useForm";

export default function Login() {
  // username and password the user has entered in form below
  const [values, handleChange] = useForm();

  // sets if the user has been authorized/verified to the app level context
  const { setAuthorizedUser } = useContext(UserContext);

  // inits after the login form below is submitted.
  const login = async (e) => {
    // prevents page from refreshing
    e.preventDefault();
    // sets loginStatus as a promise from the UserApis' loginUser function.
    let loginStatus = await loginUser(values);
    // saves user to session storage
    await saveUserToSessionStorage(loginStatus);
    // sets the authorized user for the entire app.
    await setAuthorizedUser(loginStatus);
  };

  // User login form. Sets username and password states when changed.
  return (
    <div className="login">
      <form onSubmit={login}>
        <label htmlFor="username">Username</label>
        <input
          type="username"
          name="username"
          value={values.username || ""}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={values.password || ""}
          onChange={handleChange}
        ></input>
        <br />
        <input type="submit" value="Login"></input>
        <br />
        <a href="/createAccount">Create A New Account</a>
      </form>
    </div>
  );
}
