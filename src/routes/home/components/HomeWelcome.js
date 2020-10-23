import React, { useContext } from "react";
import { UserContext } from "../../../UserContext";
import "../styles/homeWelcome.css";
export default function HomeWelcome() {
  const { authorizedUser } = useContext(UserContext);

  let displayedWelcome;
  if (authorizedUser) {
    displayedWelcome = (
      <div className="relative flex flex-col justify-center items-center">
        <h1>Welcome</h1>
        <h1> {authorizedUser.username}!</h1>
      </div>
    );
  } else {
    displayedWelcome = (
      <div className="relative">
        <h1>Welcome!</h1>
      </div>
    );
  }

  return (
    <div className="homeWelcome text-black text-3xl font-bold">
      {displayedWelcome}
    </div>
  );
}
