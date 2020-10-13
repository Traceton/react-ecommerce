import React, { useState, useContext } from "react";
import { UserContext } from "../../../UserContext";
import { updateUser } from "../../../UserApi";
export default function UpdateAccount({ setisUpdating }) {
  const { authorizedUser, setAuthorizedUser } = useContext(UserContext);

  const [usernameInput, setUsernameInput] = useState(authorizedUser.username);
  const [passwordInput, setPasswordInput] = useState(authorizedUser.password);
  const [firstNameInput, setFirstNameInput] = useState(
    authorizedUser.firstName
  );
  const [lastNameInput, setLastNameInput] = useState(authorizedUser.lastName);
  const [emailInput, setEmailInput] = useState(authorizedUser.email);
  const [phoneInput, setPhoneInput] = useState(authorizedUser.phone);

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateUser(
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
      <form className="createAccount" onSubmit={handleSubmit}>
        <h1>Update Account</h1>
        <br />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          placeholder={authorizedUser.username}
          onChange={(e) => {
            setUsernameInput(e.target.value);
          }}
        ></input>
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          placeholder={authorizedUser.password}
          onChange={(e) => {
            setPasswordInput(e.target.value);
          }}
        ></input>
        <br />
        <label htmlFor="firstName">FirstName</label>
        <input
          type="text"
          name="firstName"
          placeholder={authorizedUser.firstName}
          onChange={(e) => {
            setFirstNameInput(e.target.value);
          }}
        ></input>
        <br />
        <label htmlFor="lastName">LastName</label>
        <input
          type="text"
          name="lastName"
          placeholder={authorizedUser.lastName}
          onChange={(e) => {
            setLastNameInput(e.target.value);
          }}
        ></input>
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          placeholder={authorizedUser.email}
          onChange={(e) => {
            setEmailInput(e.target.value);
          }}
        ></input>
        <br />
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          placeholder={authorizedUser.phone}
          onChange={(e) => {
            setPhoneInput(e.target.value);
          }}
        ></input>
        <br />
        <input type="submit" value="Update Account"></input>
        <br />
        <input
          type="button"
          value="Cancel"
          onClick={() => {
            setisUpdating(false);
          }}
        ></input>
      </form>
    </div>
  );
}
