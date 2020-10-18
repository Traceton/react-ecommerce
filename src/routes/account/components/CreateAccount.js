import React, { useContext } from "react";
import "../styles/createAccount.css";
import Account from "./Account";
import { UserContext } from "../../../UserContext";
import { createUser } from "../../../UserApi";
import useForm from "../../../utils/useForm";
// The user should be able to create a single account,
//  the user shouldn't be able to create a account if a account with
//  the same username, email, or phone number already exists.
//   Username,email,or phone should be autodetected.
//    If the username already exists, the user should be suggested to try another.
//     If the email already exists, the user should be suggested to login.
//      If the phone number is already in use, the user should be asked to login.
export default function CreateAccount() {
  const { authorizedUser, setAuthorizedUser } = useContext(UserContext);

  const [values, handleChange] = useForm();

  const register = async (e) => {
    e.preventDefault();
    let createStatus = await createUser(values);
    setAuthorizedUser(createStatus);
  };

  let createAccountForm = (
    <div>
      <form className="createAccount" onSubmit={register}>
        <h1>Create Account</h1>
        <label htmlFor="username">Username</label>
        <input
          type="username"
          name="username"
          value={values.username || ""}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={values.password || ""}
          onChange={handleChange}
        />
        <label htmlFor="firstName">First name</label>
        <input
          type="firstName"
          name="firstName"
          value={values.firstName || ""}
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last name</label>
        <input
          type="lastName"
          name="lastName"
          value={values.lastName || ""}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={values.email || ""}
          onChange={handleChange}
        />
        <label htmlFor="phone">Phone</label>
        <input
          type="phone"
          name="phone"
          value={values.phone || ""}
          onChange={handleChange}
        />
        <input type="submit" value="Create Account" />
      </form>
    </div>
  );

  let displayedComponent;

  if (!authorizedUser) {
    displayedComponent = createAccountForm;
  } else {
    displayedComponent = <Account view={"authorized"} />;
  }

  return <div>{displayedComponent}</div>;
}
