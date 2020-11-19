import React, { useContext, useState } from "react";
import useForm from "../../utils/useForm";
import { createNewInventoryItem } from "../../InventoryItemApi";
import { UserContext } from "../../UserContext";
import Login from "../account/components/Login";
export default function Sell() {
  const [itemCategory, setItemCategory] = useState(null);

  const americanFlagPic =
    "https://images.unsplash.com/photo-1603417406253-4c65c06974c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
  const { authorizedUser } = useContext(UserContext);
  const initialValues = {
    itemName: "Test name",
    itemPrice: 123,
    itemPartNumber: 1,
    itemLocation: "Test location",
    itemsInStock: 1,
    itemDescription: "Test description",
    itemYearCreated: 1,
    itemMake: "Test Make",
    itemModel: "Test model",
    // WHEN USING USER ID AS A ITEM MARKER, MULTIPLE ITEMS HAVE THE SAME NUMBER
    // each item now includes the user id and its own item id.
    itemId: Date.now(),
  };

  const [values, handleChange] = useForm(initialValues);
  const [itemPicture, setItemPicture] = useState(null);

  const sellItem = async (e) => {
    e.preventDefault();
    createNewInventoryItem(
      values,
      authorizedUser.userId,
      authorizedUser.password,
      itemCategory,
      itemPicture
    );
  };

  if (!authorizedUser) {
    return (
      <div
        className="flex h-screen flex-col justify-center align-middle text-3xl text-white  "
        style={{
          backgroundImage: "url(" + americanFlagPic + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <button className="rounded-lg m-2 p-2 bg-gray-350">
          <a href="/account">
            Must have a account to sell, Please login or create one.
          </a>
        </button>
        <Login />
      </div>
    );
  }

  return (
    <div
      className="flex flex-col justify-center text-white text-center align-center p-4 text-xl "
      style={{
        backgroundImage:
          "url(" +
          "https://images.unsplash.com/photo-1603417406253-4c65c06974c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <form className="flex flex-col text-center text-2xl " onSubmit={sellItem}>
        <h1 className="text-4xl font-bold">Sell Here</h1>
        <br />
        <label htmlFor="itemPicture">Item Pictures</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          name="itemPicture"
          multiple
          type="file"
          accept=".jpg"
          onChange={(Event) => {
            const file = Event.target.files[0];
            setItemPicture(file);
          }}
        ></input>
        <br />
        {/* radio input for category */}
        <label htmlFor="itemCategoryDiv">Item Category</label>
        <div
          className="bg-gray-350 rounded text-center m-1 p-1"
          name="itemCategoryDiv"
        >
          <label htmlFor="car" className="m-1 p-1">
            Car
          </label>
          <input
            type="radio"
            id="car"
            name="itemCategory"
            value="car"
            onChange={(Event) => {
              const { value } = Event.target;
              setItemCategory(value);
            }}
          />
          <br />
          <label htmlFor="truck" className="m-1 p-1">
            Truck
          </label>
          <input
            type="radio"
            id="truck"
            name="itemCategory"
            value="truck"
            onChange={(Event) => {
              const { value } = Event.target;
              setItemCategory(value);
            }}
          />
          <br />
          <label htmlFor="parts" className="m-1 p-1">
            Parts
          </label>
          <input
            type="radio"
            id="parts"
            name="itemCategory"
            value="parts"
            onChange={(Event) => {
              const { value } = Event.target;
              setItemCategory(value);
            }}
          />
        </div>
        <br />
        <label htmlFor="itemName">itemName</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          type="itemName"
          name="itemName"
          value={values.itemName || ""}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="itemDescription">itemDescription</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          type="itemDescription"
          name="itemDescription"
          value={values.itemDescription || ""}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="itemPrice">itemPrice</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          type="itemPrice"
          name="itemPrice"
          value={values.itemPrice || ""}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="itemPartNumber">itemPartNumber</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          type="itemPartNumber"
          name="itemPartNumber"
          value={values.itemPartNumber || ""}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="itemsInStock">itemsInStock</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          type="itemsInStock"
          name="itemsInStock"
          value={values.itemsInStock || ""}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="itemLocation">itemLocation</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          type="itemLocation"
          name="itemLocation"
          value={values.itemLocation || ""}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="itemYearCreated">itemYearCreated</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          required
          type="itemYearCreated"
          name="itemYearCreated"
          value={values.itemYearCreated || ""}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="itemMake">itemMake</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          required
          type="itemMake"
          name="itemMake"
          value={values.itemMake || ""}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="itemModel">itemModel</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          required
          type="itemModel"
          name="itemModel"
          value={values.itemModel || ""}
          onChange={handleChange}
        />
        <br />
        <input
          className="bg-blue-500 p-1 rounded"
          type="submit"
          value="Sell Item"
        ></input>
        <br />
      </form>
    </div>
  );
}
