import React, { useState, useContext } from "react";
import { UserContext } from "../../../UserContext";
import { createUser } from "../../../UserApi";
import "../styles/createAccount.css";
import Account from "./Account";

// The user should be able to create a single account,
//  the user shouldn't be able to create a account if a account with
//  the same username, email, or phone number already exists.
//   Username,email,or phone should be autodetected.
//    If the username already exists, the user should be suggested to try another.
//     If the email already exists, the user should be suggested to login.
//      If the phone number is already in use, the user should be asked to login.
export default function CreateAccount() {
  const { authorizedUser, setAuthorizedUser } = useContext(UserContext);

  const [usernameInput, setUsernameInput] = useState(null);
  const [passwordInput, setPasswordInput] = useState(null);
  const [firstNameInput, setFirstNameInput] = useState(null);
  const [lastNameInput, setLastNameInput] = useState(null);
  const [emailInput, setEmailInput] = useState(null);
  const [phoneInput, setPhoneInput] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      username: usernameInput.toLowerCase().trim(),
      password: passwordInput.trim(),
      firstName: firstNameInput.toLowerCase().trim(),
      lastName: lastNameInput.toLowerCase().trim(),
      email: emailInput.toLowerCase().trim(),
      phone: phoneInput.trim(),
    };
    let createStatus = await createUser(
      newUser.username,
      newUser.password,
      newUser.firstName,
      newUser.lastName,
      newUser.email,
      newUser.phone
    );
    setAuthorizedUser(createStatus);
  };

  let createAccountForm = (
    <div>
      <form className="createAccount" onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <br />
        <label htmlFor="username">Username</label>
        <input
          required
          type="username"
          name="username"
          onChange={(e) => {
            setUsernameInput(e.target.value);
          }}
        ></input>
        <br />
        <label htmlFor="password">Password</label>
        <input
          required
          type="password"
          name="password"
          onChange={(e) => {
            setPasswordInput(e.target.value);
          }}
        ></input>
        <br />
        <label htmlFor="firstName">FirstName</label>
        <input
          required
          type="text"
          name="firstName"
          onChange={(e) => {
            setFirstNameInput(e.target.value);
          }}
        ></input>
        <br />
        <label htmlFor="lastName">LastName</label>
        <input
          required
          type="text"
          name="lastName"
          onChange={(e) => {
            setLastNameInput(e.target.value);
          }}
        ></input>
        <br />
        <label htmlFor="email">Email</label>
        <input
          required
          type="email"
          name="email"
          onChange={(e) => {
            setEmailInput(e.target.value);
          }}
        ></input>
        <br />
        <label htmlFor="phone">Phone</label>
        <input
          required
          type="phone"
          name="phone"
          onChange={(e) => {
            setPhoneInput(e.target.value);
          }}
        ></input>
        <br />
        <input type="submit" value="Create Account"></input>
        <br />
        <a href="/account">Login</a>
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
