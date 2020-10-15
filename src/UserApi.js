import Axios from "axios";

import {
  saveUserToSessionStorage,
  removeUserFromSessionStorage,
} from "./SessionStorageApi";

const ENVIROMENT_OPTIONS = {
  HEROKU: "heroku",
  LOCAL: "local",
};

const ENVIROMENT = ENVIROMENT_OPTIONS.HEROKU;

let API;
if (ENVIROMENT === "local") {
  API = "http://localhost:3001";
} else if (ENVIROMENT === "heroku") {
  API = "https://react-store-node-api.herokuapp.com";
}

// these functions should contact the react-store-node-api and verify user credentials.

// create user
export const createUser = async (
  usernameInput,
  passwordInput,
  firstNameInput,
  lastNameInput,
  emailInput,
  phoneInput
) => {
  const newUser = await new FormData();
  newUser.append("username", usernameInput);
  newUser.append("password", passwordInput);
  newUser.append("firstName", firstNameInput);
  newUser.append("lastName", lastNameInput);
  newUser.append("email", emailInput);
  newUser.append("phone", phoneInput);
  newUser.append("userId", Date.now());
  let final;
  try {
    await Axios.post(`${API}/users`, await newUser).then(async (response) => {
      console.log(response);
      final = await response.data;
    });
    saveUserToSessionStorage(final);
    return final;
  } catch (error) {
    return console.log("UserApi error");
  }
};

// login user
export const loginUser = async (usernameInput, passwordInput) => {
  let final;
  await Axios.get(`${API}/users/login/${usernameInput}/${passwordInput}`).then(
    async (response) => {
      //   console.log(response);
      final = await response.data;
    }
  );
  try {
    saveUserToSessionStorage(final);
    return final;
  } catch (error) {
    console.log("loginUserApi error");
  }
};

// update user
export const updateUser = async (
  usernameInput,
  passwordInput,
  firstNameInput,
  lastNameInput,
  emailInput,
  phoneInput
) => {
  const updatedUser = await new FormData();
  updatedUser.append("username", usernameInput);
  updatedUser.append("password", passwordInput);
  updatedUser.append("firstName", firstNameInput);
  updatedUser.append("lastName", lastNameInput);
  updatedUser.append("email", emailInput);
  updatedUser.append("phone", phoneInput);
  try {
    Axios.patch(`${API}/users/updateUser/${usernameInput}`, await updatedUser)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  } catch (error) {
    return console.log("UpdateUserApi error");
  }

  try {
  } catch (error) {
    console.log("loginUserApi error");
  }
};
// delete user
export const deleteUser = async (usernameInput, passwordInput) => {
  try {
    Axios.delete(`${API}/users/delete/${usernameInput}/${passwordInput}`).then(
      (response) => {
        console.log(response);
        removeUserFromSessionStorage(usernameInput);
        return response;
      }
    );
  } catch (error) {
    console.log("DeleteUserApi error");
  }
};

// user model below
// username: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   firstName: {
//     type: String,
//     required: false,
//   },
//   lastName: {
//     type: String,
//     required: false,
//   },
//   email: {
//     type: String,
//     required: false,
//   },
//   phone: {
//     type: Number,
//     required: true,
//   },
//   userId: {
//     type: String,
//     required: true,
//   },
//   createdOn: {
//     type: Date,
//     required: true,
//     default: Date.now(),
//   },
