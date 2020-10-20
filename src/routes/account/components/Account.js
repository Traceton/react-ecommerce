import React, { useContext, useState } from "react";

// import { UpdateAccount } from "../components/UpdateAccount";
import "../styles/account.css";
import { UserContext } from "../../../UserContext";
import { deleteUser } from "../../../UserApi";
import { removeUserFromSessionStorage } from "../../../SessionStorageApi";
import UpdateAccount from "./UpdateAccount";
export default function Account({ view }) {
  const { authorizedUser, setAuthorizedUser } = useContext(UserContext);
  const [isUpdating, setisUpdating] = useState(false);
  const [isDeleted, setIsDeleted] = useState(0);
  // UpdateAccount should be a child of Account
  // <UpdateAccount />;

  // the view cant decide how the user is seen,
  //  because it will be based on the
  // one computer users account, and not the accounts from the api.

  const checkDeleteConfirm = () => {
    // check and delete if confirmed
    if (isDeleted > 0) {
      deleteUser(authorizedUser.username, authorizedUser.password);
      return setAuthorizedUser(null);
    } else {
      return setIsDeleted(isDeleted + 1);
    }
  };

  // Account should show certain info depending on a "view variable passed to it".
  // if the user looks at their own account, all should be visable.
  // if a user is looking at somebody elses account,
  // (from a item/blog/picture etc posting.) only some info should be visable
  let displayedUser;
  if (authorizedUser && view === "authorized" && !isUpdating) {
    displayedUser = (
      // create a good looking account view
      <div className="user">
        <div className="userImageDiv">
          <img
            className="userImage"
            src={require("./tempProfilePic.jpg")}
            alt="temp profile img"
          />
          <div>
            <h1>{authorizedUser.username}</h1>
            <input
              value="Update Account"
              type="button"
              onClick={() => {
                setisUpdating(true);
              }}
            ></input>
          </div>
        </div>
        <div>
          <h2>Password</h2>
          <br />
          <h3> {authorizedUser.password} </h3>
          <br />
          <h2>First Name</h2>
          <br />
          <h3>{authorizedUser.firstName} </h3>
          <br />
          <h2>Last Name</h2>
          <br />
          <h3> {authorizedUser.lastName} </h3>
          <br />
          <h2>Email</h2>
          <br />
          <h3> {authorizedUser.email} </h3>
          <br />
          <h2>Phone</h2>
          <br />
          <h3> {authorizedUser.phone} </h3>
          <br />

          <br />
          <input
            value="Click twice to delete account"
            type="button"
            onClick={() => {
              checkDeleteConfirm();
            }}
          ></input>
          <br />
          <input
            value="Logout"
            type="button"
            onClick={() => {
              removeUserFromSessionStorage(authorizedUser);
              setAuthorizedUser(null);
            }}
          ></input>
        </div>
      </div>
    );
  } else if (authorizedUser && view === "un-authorized") {
    const publicInfo = {
      username: authorizedUser.username,
      email: authorizedUser.email,
      phone: authorizedUser.phone,
    };
    displayedUser = (
      <div className="user">
        <h2>
          {publicInfo.username} <br /> {publicInfo.email} <br />{" "}
          {publicInfo.phone}{" "}
        </h2>
      </div>
    );
  } else if (authorizedUser && view === "authorized" && isUpdating) {
    displayedUser = (
      <div className="account">
        <UpdateAccount setisUpdating={setisUpdating} />
      </div>
    );
  } else {
    displayedUser = (
      <div className="user">
        <h2>No User was found in Account.js</h2>
      </div>
    );
  }

  return <div>{displayedUser}</div>;
}
