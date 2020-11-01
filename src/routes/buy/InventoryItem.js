import React, { useState } from "react";
import Message from "../message/Message";

export default function InventoryItem({ inventoryItem, setisItemPreview }) {
  const [messaging, setMessaging] = useState(false);
  // checks if a inventory item was passed as a prop
  let item;
  if (inventoryItem) {
    item = inventoryItem;
  } else {
    item = <h1>No item found in inventory item</h1>;
  }

  // checks if the item is a single item being listed
  // or if it has multiple in stock
  let singleOrMultiple;
  if (item.itemsInStock > 1) {
    singleOrMultiple = item.itemsInStock;
  } else {
    singleOrMultiple = "";
  }

  // checks if the item is a vehicle.
  let layout;
  if (item.itemYearCreated > 1) {
    layout = (
      <div className="flex justify-center  text-center flex-col rounded m-1 p-1  text-wrap">
        <div className="flex flex-row justify-center flex-wrap text-3xl ">
          <h1 className="pl-1 pr-1 ml-1 mr-1"> {item.itemYearCreated} </h1>
          <h1 className="pl-1 pr-1 ml-1 mr-1">{item.itemMake}</h1>
          <h1 className="pl-1 pr-1 ml-1 mr-1">{item.itemModel}</h1>
        </div>
        <div className="flex flex-col text-3xl justify-center">
          <h1 className="pl-1 pr-1 ml-1 mr-1">${item.itemPrice}</h1>
        </div>
        <div className="flex flex-col justify-center text-2xl">
          <h1 className="font-bold">Seller's Location</h1>
          <h1 className="pl-1 pr-1 ml-1 mr-1">{item.itemLocation}</h1>
        </div>
        <div className="flex flex-col justify-center text-2xl">
          <h1 className="font-bold">Seller's Description</h1>
          <h1 className="pl-1 pr-1 ml-1 mr-1">{item.itemDescription}</h1>
        </div>
        <div className="flex  flex-col justify-center ">
          <input
            className="bg-transparent p-1 m-1 font-bold rounded border-2 border-blue-800 text-3xl"
            type="button"
            value="Message Seller"
            onClick={(e) => {
              e.preventDefault();
              setMessaging(!messaging);
            }}
          />
          <input
            className="bg-transparent p-1 m-1 font-bold rounded border-2 border-blue-800 text-2xl"
            type="button"
            value="Save Vehicle"
            onClick={(e) => {
              e.preventDefault();
              alert("Vehicle Saved");
            }}
          />
          <input
            className="bg-transparent p-1 m-1 font-bold rounded border-2 border-blue-800 text-xl"
            type="button"
            value="Share"
            onClick={(e) => {
              e.preventDefault();
              alert("Vehicle Shared");
            }}
          />
        </div>
      </div>
      // <h2>
      //   ${item.itemPrice}
      //   <br />
      //   {item.itemYearCreated}
      //   <br />
      //   {item.itemMake}
      //   <br />
      //   {item.itemModel}
      // </h2>
    );
  } else {
    layout = (
      <h2>
        {item.itemName}
        <br />${item.itemPrice} <br />
        {singleOrMultiple}
      </h2>
    );
  }
  let message;
  if (messaging === true) {
    message = <Message recieverUserId={item.itemUserId} />;
  }

  let itemPic = `https://react-store-node-api.herokuapp.com/inventoryItems/images/${item.itemId}`;
  return (
    <div className="flex flex-col justify-start w-11/12 bg-blue-500 rounded m-1 p-1 text-white text-xl h-auto">
      <div
        className="rounded m-1 p-1 "
        style={{
          height: "30vh",
          backgroundImage: "url(" + itemPic + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        onClick={() => {
          setisItemPreview(false);
        }}
      ></div>
      <div className="flex justify-evenly text-center items-center w-auto h-auto ">
        {layout}
      </div>
      <div className="flex justify-evenly text-center items-center w-auto h-auto ">
        {message}
      </div>
    </div>
  );
}
