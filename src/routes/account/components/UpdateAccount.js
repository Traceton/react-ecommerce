import React, { useContext } from "react";
import { UserContext } from "../../../UserContext";
import { updateUser } from "../../../UserApi";
// import { saveUserToSessionStorage } from "../../../SessionStorageApi";
import useForm from "../../../utils/useForm";
import "../styles/updateAccount.css";
export default function UpdateAccount({ setisUpdating }) {
  const { authorizedUser } = useContext(UserContext);

  const initialState = {
    username: authorizedUser.username,
    password: authorizedUser.password,
    firstName: authorizedUser.firstName,
    lastName: authorizedUser.lastName,
    email: authorizedUser.email,
    phone: authorizedUser.phone,
  };

  const [values, handleChange] = useForm(initialState);

  // const [updatedUser, setUpdatedUser] = useState(authorizedUser);
  const updateAccount = async (e) => {
    e.preventDefault();
    await updateUser(values);
    // trying to get authenticated user to update correctly.
    // await setUpdatedUser(updatedUserPromise);
    // await setAuthorizedUser(null);
    // await saveUserToSessionStorage(null);
  };

  return (
    <div>
      <div className="updateAccount">
        <form className="form" onSubmit={updateAccount}>
          <h1>Update Account</h1>
          <br />
          <label htmlFor="username">Username</label>
          <input
            type="username"
            name="username"
            value={values.username || ""}
            placeholder={authorizedUser.username}
            onChange={handleChange}
          ></input>
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={values.password || ""}
            placeholder={authorizedUser.password}
            onChange={handleChange}
          ></input>
          <br />
          <label htmlFor="firstName">FirstName</label>
          <input
            type="firstName"
            name="firstName"
            value={values.firstName || ""}
            placeholder={authorizedUser.firstName}
            onChange={handleChange}
          ></input>
          <br />
          <label htmlFor="lastName">LastName</label>
          <input
            type="lastName"
            name="lastName"
            value={values.lastName || ""}
            placeholder={authorizedUser.lastName}
            onChange={handleChange}
          ></input>
          <br />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={values.email || ""}
            placeholder={authorizedUser.email}
            onChange={handleChange}
          ></input>
          <br />
          <label htmlFor="phone">Phone</label>
          <input
            type="phone"
            name="phone"
            value={values.phone || ""}
            placeholder={authorizedUser.phone}
            onChange={handleChange}
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
    </div>
  );
}
