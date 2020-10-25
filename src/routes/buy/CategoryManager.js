import React, { useState } from "react";
import Inventory from "./Inventory";

export default function CategoryManager() {
  const [selectedCategory, setselectedCategory] = useState(
    <Inventory category={"car"} />
  );

  return (
    <div>
      <div className="">
        <input
          type="button"
          value="Cars"
          onClick={(Event) => {
            setselectedCategory(<Inventory category={"car"} />);
          }}
        />
        <input
          type="button"
          value="Trucks"
          onClick={(Event) => {
            setselectedCategory(<Inventory category={"truck"} />);
          }}
        />
        <input
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
