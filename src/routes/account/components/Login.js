import React, { useContext } from "react";
import "../styles/login.css";
import { loginUser } from "../../../UserApi";
import { saveUserToSessionStorage } from "../../../SessionStorageApi";
import { UserContext } from "../../../UserContext";
import useForm from "../../../utils/useForm";

export default function Login() {
  const initialState = {
    username: "",
    password: "",
  };

  // username and password the user has entered in form below
  const [values, handleChange] = useForm(initialState);

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
    <div className="login rounded text-2xl text-white flex justify-center content-center items-center text-center flex-col align-middle">
      <form className="p-6" onSubmit={login}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            className="py-2 m-2 bg-gray-350 rounded"
            type="username"
            name="username"
            value={values.username || ""}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            className="py-2 m-2 bg-gray-350 rounded"
            type="password"
            name="password"
            value={values.password || ""}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <input
            type="submit"
            value="Login"
            className="bg-gray-350 hover:bg-blue-500 rounded px-10 py-4 m-2"
          ></input>
        </div>
        <div>
          <a
            className="text-xl text-blue-500 bg-gray-350 rounded p-2 m-2"
            href="/createAccount"
          >
            Create A New Account
          </a>
        </div>
      </form>
    </div>
  );
}
