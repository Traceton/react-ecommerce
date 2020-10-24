import React, { useContext, useState } from "react";
// import "../styles/account.css";
import { UserContext } from "../../../UserContext";
import UpdateAccount from "./UpdateAccount";
import { API } from "../../../UserApi";
export default function Account({ view }) {
  const { authorizedUser } = useContext(UserContext);
  const [isUpdating, setisUpdating] = useState(false);

  // Account should show certain info depending on a "view variable passed to it".
  // if the user looks at their own account, all should be visable.
  // if a user is looking at somebody elses account,
  // (from a item/blog/picture etc posting.) only some info should be visable
  const americanFlagPic =
    "https://images.unsplash.com/photo-1603417406253-4c65c06974c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";

  let displayedUser;
  if (authorizedUser && view === "authorized" && !isUpdating) {
    displayedUser = (
      // create a good looking account view
      <div
        className="flex justify-start flex-col flex-wrap text-white h-screen"
        style={{
          backgroundImage: "url(" + americanFlagPic + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="flex flex-row justify-around m-1 p-2 h-40"
          // style={{
          //   backgroundImage:
          //     "url(" +
          //     "https://images.unsplash.com/photo-1603413954143-f8203e60bfe9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" +
          //     ")",
          //   backgroundPosition: "center",
          //   backgroundSize: "cover",
          //   backgroundRepeat: "no-repeat",
          // }}
        >
          <img
            className="h-32 m-4 rounded-2xl"
            src={`${API}/users/profilePics/${authorizedUser.userId}`}
            alt="temp profile img"
          />
          <div className="flex flex-col justify-center font-bold">
            <div>
              <h2 className="italic text-3xl">@{authorizedUser.username}</h2>
            </div>
            <input
              className="m-1 p-1 bg-transparent border-2 border  rounded"
              value="Edit Profile"
              type="button"
              onClick={() => {
                setisUpdating(true);
              }}
            ></input>
          </div>
        </div>

        {/* bottom half  */}
        <div className="flex flex-col justify-center text-start m-1 p-2  rounded h-auto">
          <h1 className="font-bold text-3xl">
            {authorizedUser.firstName} {authorizedUser.lastName}
          </h1>
          <h3 className="font-bold text-xl ">
            {authorizedUser.city},{authorizedUser.state}
          </h3>
          <h4 className="text-lg mt-2">{authorizedUser.userBio}</h4>
        </div>
        <div className="flex flex-col justify-center text-center bg-gray-350 m-3 rounded text-3xl  ">
          <button className="font-bold h-16">Create a listing here</button>
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
