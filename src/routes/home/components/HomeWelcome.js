import React, { useContext } from "react";
import { UserContext } from "../../../UserContext";
import "../styles/homeWelcome.css";
export default function HomeWelcome() {
  const { authorizedUser } = useContext(UserContext);

  let displayedWelcome;
  if (authorizedUser) {
    displayedWelcome = (
      <div>
        <h1>Welcome</h1>
        <br />
        <h1> {authorizedUser.username}!</h1>
      </div>
    );
  } else {
    displayedWelcome = (
      <div>
        <h1>Welcome!</h1>
      </div>
    );
  }

  return <div className="homeWelcome">{displayedWelcome}</div>;
}
