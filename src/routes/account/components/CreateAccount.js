import React, { useContext, useState } from "react";
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
  const [profilePic, setprofilePic] = useState(null);
  const [values, handleChange] = useForm();

  const register = async (e) => {
    e.preventDefault();
    let createStatus = await createUser(values, profilePic);
    setAuthorizedUser(createStatus);
  };

  let createAccountForm = (
    <div
      className="flex flex-col justify-center text-white text-center align-center p-4 text-xl "
      style={{
        backgroundImage:
          "url(" +
          "https://images.unsplash.com/photo-1603417406253-4c65c06974c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <form className="flex flex-col text-center text-2xl" onSubmit={register}>
        <h1 className="text-4xl font-bold">Create Account</h1>
        <label htmlFor="profilePic">Profile picture</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          name="profilePic"
          multiple
          type="file"
          accept=".jpg"
          onChange={(Event) => {
            const file = Event.target.files[0];
            setprofilePic(file);
          }}
        ></input>

        <label htmlFor="username">Username</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          required
          type="username"
          name="username"
          value={values.username || ""}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          required
          type="password"
          name="password"
          value={values.password || ""}
          onChange={handleChange}
        />
        <label htmlFor="firstName">First name</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          required
          type="firstName"
          name="firstName"
          value={values.firstName || ""}
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last name</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          required
          type="lastName"
          name="lastName"
          value={values.lastName || ""}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          required
          type="email"
          name="email"
          value={values.email || ""}
          onChange={handleChange}
        />
        <label htmlFor="phone">Phone</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          required
          type="phone"
          name="phone"
          value={values.phone || ""}
          onChange={handleChange}
        />
        {/* new below */}
        <label htmlFor="userBio">Bio</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          required
          type="userBio"
          name="userBio"
          value={values.userBio || ""}
          onChange={handleChange}
        />
        <label htmlFor="streetAddress">Street Address</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          required
          type="streetAddress"
          name="streetAddress"
          value={values.streetAddress || ""}
          onChange={handleChange}
        />
        <label htmlFor="city">City</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          required
          type="city"
          name="city"
          value={values.city || ""}
          onChange={handleChange}
        />
        <label htmlFor="state">State</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          required
          type="state"
          name="state"
          value={values.state || ""}
          onChange={handleChange}
        />
        <label htmlFor="zipCode">Zip</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          required
          type="zipCode"
          name="zipCode"
          value={values.zipCode || ""}
          onChange={handleChange}
        />
        <input
          className="bg-blue-500 p-1 my-4 rounded"
          type="submit"
          value="Create Account"
        />
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
