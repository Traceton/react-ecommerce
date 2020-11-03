import Axios from "axios";
import { API } from "./UserApi";

// NEED TO BE UPDATED FOR MESSAGES
export const sendNewMessage = async (
  senderUserId,
  recieverUserId,
  itemId,
  messageBody
) => {
  const newMessage = {
    senderUserId: senderUserId,
    recieverUserId: recieverUserId,
    itemId: itemId,
    messageBody: messageBody,
    messageId: Math.random(),
  };

  let returnValue;
  try {
    await Axios.post(
      `${API}/messages/sendNewMessage/${senderUserId}/${recieverUserId}`,
      newMessage
    ).then(async (response) => {
      console.log(response);
      returnValue = await response.data;
    });
    return returnValue;
  } catch (error) {
    return console.log("Message api create new message error");
  }
};

export const getMessages = async (senderUserId, recieverUserId, itemId) => {
  let returnValue;
  try {
    await Axios.get(
      `${API}/messages/getPreviousMessages/${senderUserId}/${recieverUserId}/${itemId}`
    ).then(async (response) => {
      console.log(response);
      returnValue = await response.data;
    });
    return returnValue;
  } catch (error) {
    return console.log("Message api get messages error");
  }
};
