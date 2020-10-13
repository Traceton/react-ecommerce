import React, { useContext } from "react";
import Account from "./Account";

import Login from "./Login";
import { UserContext } from "../../../UserContext";

export default function AccountManager() {
  const { authorizedUser } = useContext(UserContext);

  let displayedAccountPage;
  if (authorizedUser) {
    displayedAccountPage = <Account view={"authorized"} />;
  } else {
    displayedAccountPage = <Login />;
  }

  return <div>{displayedAccountPage}</div>;
}
