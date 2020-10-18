import React from "react";
import useForm from "../../../utils/useForm";
// The user should be able to create a single account,
//  the user shouldn't be able to create a account if a account with
//  the same username, email, or phone number already exists.
//   Username,email,or phone should be autodetected.
//    If the username already exists, the user should be suggested to try another.
//     If the email already exists, the user should be suggested to login.
//      If the phone number is already in use, the user should be asked to login.
export default function CreateAccount() {
  //   const register = (e) => {
  //     e.preventDefault();
  //     console.log(values);
  //   };
  const register = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const [values, handleChange] = useForm();

  return (
    <div>
      <form onSubmit={register}>
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
        <input type="submit" value="Create Account" />
      </form>
    </div>
  );
}
