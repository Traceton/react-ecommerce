import React, { useContext } from "react";
import { UserContext } from "../../../UserContext";
import "../styles/homeWelcome.css";
export default function HomeWelcome() {
  const { authorizedUser } = useContext(UserContext);

  let displayedWelcome;
  if (authorizedUser) {
    displayedWelcome = (
      <div className="content-center flex flex-col align-middle justify-center items-center">
        <h1>Welcome</h1>
        <h1> {authorizedUser.username}!</h1>
      </div>
    );
  } else {
    displayedWelcome = (
      <div className="rounded bg-blue-500 m-1 p-2 content-center text-center flex flex-col align-middle justify-center items-center">
        <h1>Welcome!</h1>
        <h1>
          {" "}
          Please use the username of "test" and password of "test" to try out
          the application features. Thanks!
        </h1>
      </div>
    );
  }

  const americanFlagPic =
    "https://images.unsplash.com/photo-1603417406253-4c65c06974c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
  return (
    <div
      className="flex flex-col align-middle justify-center h-screen text-white text-4xl font-bold"
      style={{
        backgroundImage: "url(" + americanFlagPic + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {displayedWelcome}
    </div>
  );
}
