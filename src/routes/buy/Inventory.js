import React, { useState, useEffect } from "react";

import InventoryItem from "./InventoryItem";

export default function Inventory({ category }) {
  const [isLoading, setisLoading] = useState(true);
  const [inventoryItems, setinventoryItems] = useState();

  // fetches all inventory items from the react-store database
  let getInventoryItemsFromApi = () => {
    fetch(
      `https://react-store-node-api.herokuapp.com/inventoryItems/items/${category}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // sets the data from database to inventory items
        setinventoryItems(data);
        setisLoading(false);
      });
  };
  useEffect(() => {
    getInventoryItemsFromApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, category]);

  // inventory items to be displayed.
  let items = [];
  // checks if data was recieved from the database.
  if (
    inventoryItems != null &&
    inventoryItems !== undefined &&
    inventoryItems.length > 0
  ) {
    inventoryItems.map((item) => {
      return items.push(<InventoryItem key={item._id} inventoryItem={item} />);
    });
  } else {
    return (
      <div className="inventoryItem">
        {" "}
        <h1>No items found. Please list a item.</h1>
      </div>
    );
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return <div>{items}</div>;
}
