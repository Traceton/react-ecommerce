import React, { useContext, useState } from "react";
import { UserContext } from "../../../UserContext";
import { deleteUser } from "../../../UserApi";
import { updateUser } from "../../../UserApi";
// import { API } from "../../../UserApi";
// import { saveUserToSessionStorage } from "../../../SessionStorageApi";
import useForm from "../../../utils/useForm";
import "../styles/updateAccount.css";
// import Axios from "axios";
export default function UpdateAccount({ setisUpdating }) {
  const { authorizedUser, setAuthorizedUser } = useContext(UserContext);

  const [isDeleted, setIsDeleted] = useState(0);

  const checkDeleteConfirm = () => {
    // check and delete if confirmed
    if (isDeleted > 0) {
      deleteUser(authorizedUser.username, authorizedUser.password);
      return setAuthorizedUser(null);
    } else {
      return setIsDeleted(isDeleted + 1);
    }
  };
  const [profilePic, setprofilePic] = useState(null);

  const initialState = {
    username: authorizedUser.username,
    password: authorizedUser.password,
    firstName: authorizedUser.firstName,
    lastName: authorizedUser.lastName,
    email: authorizedUser.email,
    phone: authorizedUser.phone,
    userBio: authorizedUser.userBio,
    streetAddress: authorizedUser.streetAddress,
    city: authorizedUser.city,
    state: authorizedUser.state,
    zipCode: authorizedUser.zipCode,
    userId: authorizedUser.userId,
  };

  const [values, handleChange] = useForm(initialState);

  // const [updatedUser, setUpdatedUser] = useState(authorizedUser);
  const updateAccount = async (e) => {
    e.preventDefault();
    await updateUser(values, profilePic);
    // trying to get authenticated user to update correctly.
    // await setUpdatedUser(updatedUserPromise);
    // await setAuthorizedUser(null);
    // await saveUserToSessionStorage(null);
  };

  return (
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
      <form
        className="flex flex-col text-center text-2xl "
        onSubmit={updateAccount}
      >
        <h1 className="text-4xl font-bold">Update Account</h1>
        <br />
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
        <br />
        <label htmlFor="username">Username</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          type="username"
          name="username"
          value={values.username || ""}
          placeholder={authorizedUser.username}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="password">Password</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          type="password"
          name="password"
          value={values.password || ""}
          placeholder={authorizedUser.password}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="firstName">FirstName</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          type="firstName"
          name="firstName"
          value={values.firstName || ""}
          placeholder={authorizedUser.firstName}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="lastName">LastName</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          type="lastName"
          name="lastName"
          value={values.lastName || ""}
          placeholder={authorizedUser.lastName}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="email">Email</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          type="email"
          name="email"
          value={values.email || ""}
          placeholder={authorizedUser.email}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="phone">Phone</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          type="phone"
          name="phone"
          value={values.phone || ""}
          placeholder={authorizedUser.phone}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="userBio">Bio</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          type="userBio"
          name="userBio"
          value={values.userBio || ""}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="streetAddress">Street Address</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          required
          type="streetAddress"
          name="streetAddress"
          value={values.streetAddress || ""}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="city">City</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          required
          type="city"
          name="city"
          value={values.city || ""}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="state">State</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          required
          type="state"
          name="state"
          value={values.state || ""}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="zipCode">Zip</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          required
          type="zipCode"
          name="zipCode"
          value={values.zipCode || ""}
          onChange={handleChange}
        />
        <br />
        <input
          className="bg-blue-500 p-1 rounded"
          type="submit"
          value="Save Changes"
        ></input>
        <br />
        <input
          className="bg-white text-black p-1 rounded"
          type="button"
          value="Cancel"
          onClick={() => {
            setisUpdating(false);
          }}
        ></input>
        <br />
        <input
          className="bg-red-600 p-1 rounded"
          value="Click twice to delete account"
          type="button"
          onClick={() => {
            checkDeleteConfirm();
          }}
        ></input>
      </form>
    </div>
  );
}
