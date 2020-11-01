import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
export default function Message({ recieverUserId }) {
  const { authorizedUser } = useContext(UserContext);

  let displayedComponent;
  if (authorizedUser) {
    displayedComponent = (
      <div>
        <h1>Sender = {authorizedUser.username}</h1>
        <h1>Seller id = {recieverUserId}</h1>
      </div>
    );
  } else {
    displayedComponent = <h1>Please login to send a message</h1>;
  }

  return <div>{displayedComponent}</div>;
}
