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
  };

  //   let final;
  try {
    await Axios.post(
      `${API}/messages/sendNewMessage/${senderUserId}/${recieverUserId}`,
      newMessage
    ).then(async (response) => {
      console.log(response);
      //   final = await response.data;
    });
    // return final;
  } catch (error) {
    return console.log("Message api create new message error");
  }
};
