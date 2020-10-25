import React from "react";

export default function InventoryItem({ inventoryItem }) {
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
        {item.itemDescription} <br />
        {singleOrMultiple}
      </h2>
    );
  }

  return (
    <div className="inventoryItem flex">
      <div className="">
        <img
          src={`https://react-store-node-api.herokuapp.com/inventoryItems/images/${item.itemId}`}
          alt=" not found"
        />
      </div>
      <div className="inventoryItemInfo flex">{layout}</div>
    </div>
  );
}
