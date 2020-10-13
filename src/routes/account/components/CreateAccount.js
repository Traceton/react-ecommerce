import React, { useState } from "react";
import { createUser } from "../../../UserApi";

export default function CreateAccount() {
  const [usernameInput, setUsernameInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const [firstNameInput, setFirstNameInput] = useState();
  const [lastNameInput, setLastNameInput] = useState();
  const [emailInput, setEmailInput] = useState();
  const [phoneInput, setPhoneInput] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    createUser(
      usernameInput,
      passwordInput,
      firstNameInput,
      lastNameInput,
      emailInput,
      phoneInput
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <br />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          onChange={(e) => {
            setUsernameInput(e.target.value);
          }}
        ></input>
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          onChange={(e) => {
            setPasswordInput(e.target.value);
          }}
        ></input>
        <br />
        <label htmlFor="firstName">FirstName</label>
        <input
          type="text"
          name="firstName"
          onChange={(e) => {
            setFirstNameInput(e.target.value);
          }}
        ></input>
        <br />
        <label htmlFor="lastName">LastName</label>
        <input
          type="text"
          name="lastName"
          onChange={(e) => {
            setLastNameInput(e.target.value);
          }}
        ></input>
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          onChange={(e) => {
            setEmailInput(e.target.value);
          }}
        ></input>
        <br />
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
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
}
