import React from "react";

export default function InventoryItem({ inventoryItem, setisItemPreview }) {
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
      <h2>
        ${item.itemPrice}
        <br />
        {item.itemYearCreated}
        <br />
        {item.itemMake}
        <br />
        {item.itemModel}
      </h2>
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
  let itemPic = `https://react-store-node-api.herokuapp.com/inventoryItems/images/${item.itemId}`;
  return (
    <div
      className="flex flex-col justify-start w-11/12 bg-blue-500 rounded m-1 p-1 text-white text-xl h-auto"
      onClick={() => {
        setisItemPreview(false);
      }}
    >
      <div
        className="rounded m-1 p-1 "
        style={{
          height: "30vh",
          backgroundImage: "url(" + itemPic + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="flex justify-evenly text-center items-center w-auto h-auto ">
        {layout}
      </div>
    </div>
  );
}
