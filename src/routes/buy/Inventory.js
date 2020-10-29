import React, { useState, useEffect } from "react";
import InventoryItemPreview from "./InventoryItemPreview";

export default function Inventory({ category }) {
  const [isLoading, setisLoading] = useState(true);
  const [inventoryItems, setinventoryItems] = useState();
  const americanFlagPic =
    "https://images.unsplash.com/photo-1603417406253-4c65c06974c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
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
      return items.push(
        //   adjusts width of each element here
        <div className="flex " key={item._id}>
          <InventoryItemPreview key={item._id} inventoryItem={item} />{" "}
        </div>
      );
    });
  } else {
    return (
      <div
        className="flex h-screen flex-col justify-around align-middle text-3xl text-white "
        style={{
          backgroundImage: "url(" + americanFlagPic + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1>No items found. Please list a item.</h1>
      </div>
    );
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  //   MAKE THIS UTILIZE GRID AND LOOK LIKE FACEBOOK MARKETPLACE.
  return (
    <div
      className=" flex flex-col h-screen "
      style={{
        backgroundImage: "url(" + americanFlagPic + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {items}
    </div>
  );
}
