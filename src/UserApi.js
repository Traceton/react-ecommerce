import Axios from "axios";

import {
  saveUserToSessionStorage,
  removeUserFromSessionStorage,
} from "./SessionStorageApi";

const ENVIROMENT_OPTIONS = {
  HEROKU: "heroku",
  LOCAL: "local",
};

// SET DEVELOPMENT ENVIROMENT HERE
const ENVIROMENT = ENVIROMENT_OPTIONS.LOCAL;
export let API;
if (ENVIROMENT === "local") {
  API = "http://localhost:3001";
} else if (ENVIROMENT === "heroku") {
  API = "https://react-store-node-api.herokuapp.com";
}

// these functions should contact the react-store-node-api and verify user credentials.

// create user
export const createUser = async (userInfo, profilePic) => {
  const newUser = await new FormData();
  newUser.append("username", userInfo.username.toLowerCase().trim());
  newUser.append("password", userInfo.password.trim());
  newUser.append("firstName", userInfo.firstName.toLowerCase().trim());
  newUser.append("lastName", userInfo.lastName.toLowerCase().trim());
  newUser.append("email", userInfo.email.toLowerCase().trim());
  newUser.append("phone", userInfo.phone);
  newUser.append("userId", Date.now());
  newUser.append("userBio", userInfo.userBio.toLowerCase().trim());
  newUser.append("streetAddress", userInfo.streetAddress.toLowerCase().trim());
  newUser.append("city", userInfo.city.toLowerCase().trim());
  newUser.append("state", userInfo.state.toLowerCase().trim());
  newUser.append("zipCode", userInfo.zipCode.toLowerCase().trim());
  newUser.append("profilePic", profilePic);
  let final;
  try {
    await Axios.post(`${API}/users`, await newUser).then(async (response) => {
      console.log(response);
      final = await response.data;
    });
    saveUserToSessionStorage(final);
    return final;
  } catch (error) {
    return console.log("UserApi create user error");
  }
};

// login user
export const loginUser = async (userInfo) => {
  let final;
  await Axios.get(
    `${API}/users/login/${userInfo.username
      .toLowerCase()
      .trim()}/${userInfo.password.toLowerCase().trim()}`
  ).then(async (response) => {
    //   console.log(response);
    final = await response.data;
  });
  try {
    saveUserToSessionStorage(final);
    return final;
  } catch (error) {
    console.log("loginUserApi error");
  }
};

// update user
export const updateUser = async (userInfo, profilePic) => {
  const updatedUser = await new FormData();
  updatedUser.append("username", userInfo.username.toLowerCase().trim());
  updatedUser.append("password", userInfo.password.trim());
  updatedUser.append("firstName", userInfo.firstName.toLowerCase().trim());
  updatedUser.append("lastName", userInfo.lastName.toLowerCase().trim());
  updatedUser.append("email", userInfo.email.toLowerCase().trim());
  updatedUser.append("phone", userInfo.phone);
  updatedUser.append("userId", userInfo.userId);
  updatedUser.append("userBio", userInfo.userBio.toLowerCase().trim());
  updatedUser.append("city", userInfo.city.toLowerCase().trim());
  updatedUser.append("state", userInfo.state.toLowerCase().trim());
  updatedUser.append("zipCode", userInfo.zipCode.toLowerCase().trim());
  if (profilePic) {
    Axios.delete(`${API}/users/deleteProfilePic/${userInfo.userId}`).then(
      async (response) => {
        await response;
        return console.log(response);
      }
    );
    updatedUser.append("profilePic", profilePic);
  }

  let updateUserPromise;

  try {
    Axios.patch(
      `${API}/users/updateUser/${userInfo.username.toLowerCase().trim()}`,
      await updatedUser
    )
      .then(async (data) => {
        console.log(data);
        updateUserPromise = await data;
        return updateUserPromise;
      })
      .catch((err) => console.log(err));
  } catch (error) {
    return console.log("UpdateUserApi error");
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

// check if the users account already exists,
// check by email is already accosicated with a account,
// than check if the username is already taken.
export const checkIfAccountAlreadyExists = async () => {
  console.log("checking if count already exists.");
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
