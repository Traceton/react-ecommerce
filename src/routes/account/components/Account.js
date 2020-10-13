import React, { useContext } from "react";
// import { UpdateAccount } from "../components/UpdateAccount";
import { UserContext } from "../../../UserContext";
export default function Account({ view }) {
  const { authorizedUser, setAuthorizedUser } = useContext(UserContext);
  // UpdateAccount should be a child of Account
  // <UpdateAccount />;
  console.log(`view from Account.js-> ${view}`);
  // Account should show certain info depending on a "view variable passed to it".
  // if the user looks at their own account, all should be visable.
  // if a user is looking at somebody elses account,
  // (from a item/blog/picture etc posting.) only some info should be visable
  let displayedUser;
  if (authorizedUser && view === "authorized") {
    displayedUser = (
      <div className="user">
        <h1>{authorizedUser.username}</h1>
        <br />
        <h1> {authorizedUser.password} </h1>
        <br />
        <h1> {authorizedUser.firstName} </h1>
        <br />
        <h1> {authorizedUser.lastName} </h1>
        <br />
        <h1> {authorizedUser.email} </h1>
        <br />
        <h1> {authorizedUser.phone} </h1>
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
        <h1>
          {publicInfo.username} <br /> {publicInfo.email} <br />{" "}
          {publicInfo.phone}{" "}
        </h1>
      </div>
    );
  } else {
    displayedUser = (
      <div className="user">
        <h1>No User was found in Account.js</h1>
      </div>
    );
  }
  return <div>{displayedUser}</div>;
}
