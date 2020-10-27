import Axios from "axios";
import { API } from "./UserApi";

// USE A USERID TO VERIFY THE USER WHEN SELLING A ITEM
// need to append a body to the request post
export const createNewInventoryItem = async (
  itemInfo,
  userId,
  password,
  itemImage
) => {
  const newItem = await new FormData();
  newItem.append("itemName", itemInfo.itemName);
  newItem.append("itemPrice", itemInfo.itemPrice);
  newItem.append("itemCategory", itemInfo.itemCategory.toLowerCase().trim());
  newItem.append("itemPartNumber", itemInfo.itemPartNumber);
  newItem.append("itemLocation", itemInfo.itemLocation.trim());
  newItem.append("itemsInStock", itemInfo.itemsInStock);
  newItem.append("itemDescription", itemInfo.itemDescription);
  newItem.append("itemYearCreated", itemInfo.itemYearCreated);
  newItem.append("itemMake", itemInfo.itemMake);
  newItem.append("itemModel", itemInfo.itemModel);
  newItem.append("itemId", itemInfo.itemId);
  newItem.append("itemImage", itemImage);

  //   let final;
  try {
    await Axios.post(
      `${API}/inventoryItems/createNewItem/${userId}/${password}`,
      newItem
    ).then(async (response) => {
      console.log(response);
      //   final = await response.data;
    });
    // return final;
  } catch (error) {
    return console.log("Invetory item create new item api error");
  }
};
