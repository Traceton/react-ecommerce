import React, { useContext, useState } from "react";
import "../styles/account.css";
import { UserContext } from "../../../UserContext";
import UpdateAccount from "./UpdateAccount";
export default function Account({ view }) {
  const { authorizedUser } = useContext(UserContext);
  const [isUpdating, setisUpdating] = useState(false);

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
          <div className="userImageBesideDiv">
            <div>
              <h2>@{authorizedUser.username}</h2>
            </div>
            <div>
              <br />
            </div>
            <input
              value="Edit Profile"
              type="button"
              onClick={() => {
                setisUpdating(true);
              }}
            ></input>
          </div>
        </div>
        <div className="userBioDiv">
          <h1>
            {authorizedUser.firstName} {authorizedUser.lastName}
          </h1>
          <h3>
            {authorizedUser.city},{authorizedUser.state}
          </h3>
          <br />
          <h4>{authorizedUser.userBio}</h4>
        </div>
        <div>
          <br />
          <br />
          <h4>Once you list something for sale, it will appear here.</h4>
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
      <div className="updateAccount">
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
