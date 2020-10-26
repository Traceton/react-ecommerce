import Axios from "axios";
import { API } from "./UserApi";

// USE A USERID TO VERIFY THE USER WHEN SELLING A ITEM
// need to append a body to the request post
export const createNewInventoryItem = async (userId, password) => {
  Axios.post(`${API}/inventoryItems/createNewItem/${userId}/${password}`).then(
    async (response) => {
      console.log(response);
      //   final = await response.data;
    }
  );
};
