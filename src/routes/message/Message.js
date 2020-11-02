import React, { useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";
import { getMessages } from "../../MessageApi";
export default function Message({ recieverUserId }) {
  const { authorizedUser } = useContext(UserContext);

  useEffect(() => {
    let initMessages = async () => {
      // THIS FUNCTION IS NOT COMPLETE IN NODE JS YET.
      let messagesFromApi = await getMessages(
        authorizedUser.userId,
        recieverUserId
      );
      console.log(`messages from api -> ${messagesFromApi}`);
    };
    initMessages();
  });

  let displayedComponent;
  if (authorizedUser && authorizedUser.userId !== recieverUserId) {
    displayedComponent = (
      <div>
        <h1>Sender = {authorizedUser.username}</h1>
        <h1>Seller id = {recieverUserId}</h1>
      </div>
    );
  } else if (authorizedUser && authorizedUser.userId === recieverUserId) {
    displayedComponent = (
      <div>
        <h1>This is your listing, You can't message yourself :)</h1>
      </div>
    );
  } else {
    displayedComponent = <h1>Please login to send a message</h1>;
  }

  return (
    <div className="h-auto w-11/12 bg-gray-350 rounded m-1 p-1">
      {displayedComponent}
    </div>
  );
}
