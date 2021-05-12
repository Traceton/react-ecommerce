import React, { useState } from "react";
import Inventory from "./Inventory";

export default function CategoryManager() {
  const [selectedCategory, setselectedCategory] = useState(
    <Inventory category={"car"} />
  );

  const americanFlagPic =
    "https://images.unsplash.com/photo-1603417406253-4c65c06974c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";

  return (
    <div>
      <div
        className="flex flex-row bg-gray-350 justify-around text-white text-xl"
        style={{
          backgroundImage: "url(" + americanFlagPic + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <input
          className="m-1 p-1 bg-gray-350 border-2 border  rounded"
          type="button"
          value="Cars"
          onClick={(Event) => {
            setselectedCategory(<Inventory category={"car"} />);
          }}
        />
        <input
          className="m-1 p-1 bg-gray-350 border-2 border  rounded"
          type="button"
          value="Trucks"
          onClick={(Event) => {
            setselectedCategory(<Inventory category={"truck"} />);
          }}
        />
        <input
          className="m-1 p-1 bg-gray-350 border-2 border  rounded"
          type="button"
          value="Parts"
          onClick={(Event) => {
            setselectedCategory(<Inventory category={"parts"} />);
          }}
        />
      </div>
      <div>{selectedCategory}</div>
    </div>
  );
}
