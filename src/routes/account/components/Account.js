import React, { useContext, useState } from "react";

// import { UpdateAccount } from "../components/UpdateAccount";
import "../styles/account.css";
import { UserContext } from "../../../UserContext";
import UpdateAccount from "./UpdateAccount";
export default function Account({ view }) {
  const { authorizedUser, setAuthorizedUser } = useContext(UserContext);
  const [isUpdating, setisUpdating] = useState(false);
  // UpdateAccount should be a child of Account
  // <UpdateAccount />;

  // the view cant decide how the user is seen,
  //  because it will be based on the
  // one computer users account, and not the accounts from the api.

  // Account should show certain info depending on a "view variable passed to it".
  // if the user looks at their own account, all should be visable.
  // if a user is looking at somebody elses account,
  // (from a item/blog/picture etc posting.) only some info should be visable
  let displayedUser;
  if (authorizedUser && view === "authorized" && !isUpdating) {
    displayedUser = (
      <div className="user">
        <h1>My Account</h1>

        <hr />
        <h2>{authorizedUser.username}</h2>
        <br />
        <h2> {authorizedUser.password} </h2>
        <br />
        <h2> {authorizedUser.firstName} </h2>
        <br />
        <h2> {authorizedUser.lastName} </h2>
        <br />
        <h2> {authorizedUser.email} </h2>
        <br />
        <h2> {authorizedUser.phone} </h2>
        <br />
        <input
          value="Update Account"
          type="button"
          onClick={() => {
            setisUpdating(true);
          }}
        ></input>
        <br />
        <input
          value="Logout"
          type="button"
          onClick={() => {
            setAuthorizedUser(null);
          }}
        ></input>
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
    displayedUser = <UpdateAccount setisUpdating={setisUpdating} />;
  } else {
    displayedUser = (
      <div className="account">
        <h2>No User was found in Account.js</h2>
      </div>
    );
  }

  return <div>{displayedUser}</div>;
}
