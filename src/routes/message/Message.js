import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";
import { sendNewMessage, getMessages } from "../../MessageApi";
export default function Message({ recieverUserId, itemId }) {
  const { authorizedUser } = useContext(UserContext);
  const [messageBody, setmessageBody] = useState(null);
  const [messagesFromApi, setMessagesFromApi] = useState(null);

  let initMessages = async () => {
    let messagesFromApi = await getMessages(
      authorizedUser.userId,
      recieverUserId,
      itemId
    );
    setMessagesFromApi(messagesFromApi);
  };

  let submitNewMessage = async (e) => {
    e.preventDefault();
    if (messageBody) {
      await sendNewMessage(
        authorizedUser.userId,
        recieverUserId,
        itemId,
        messageBody
      );
      initMessages();
    } else {
      console.log("message body is empty.");
    }
  };
  // should change css based on who is viewing the messages and who is sending them.
  // needs to map through messages and sort them by date and then display them to the user.
  let displayedPreviousMessages = [];
  if (messagesFromApi) {
    messagesFromApi.map((message) => {
      return displayedPreviousMessages.push(
        <h1 key={message.messageId}>{message.messageBody}</h1>
      );
    });
  } else {
    displayedPreviousMessages = <h1>Loading comments</h1>;
  }

  useEffect(() => {
    let initMessages = async () => {
      let messagesFromApi = await getMessages(
        authorizedUser.userId,
        recieverUserId,
        itemId
      );
      setMessagesFromApi(messagesFromApi);
    };
    initMessages();
  }, [authorizedUser.userId, recieverUserId, itemId]);

  let displayedComponent;
  if (authorizedUser && authorizedUser.userId !== recieverUserId) {
    displayedComponent = (
      <div>
        <div>
          {/* <h1>Sender = {authorizedUser.username}</h1>
          <h1>Seller id = {recieverUserId}</h1> */}
          {displayedPreviousMessages}
        </div>
        <div>
          <form
            className="flex flex-col bg-gray-350 rounded "
            onSubmit={submitNewMessage}
          >
            {/* <label htmlFor="messageBodyInput">Send new message</label> */}
            <input
              className="flex flex-col bg-gray-550 m-1 p-1 rounded text-black"
              type="text"
              name="messageBodyInput"
              onChange={(e) => {
                setmessageBody(e.target.value);
              }}
            />
            <input
              className="flex flex-col bg-gray-500 m-1 p-1 rounded "
              type="submit"
              value="Send"
            />
          </form>
        </div>
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
