// save and remove users from session storage.

// save a user to session storage
const saveUserToSessionStorage = async (authorizedUser) => {
  const user = await authorizedUser;
  try {
    if (user) {
      console.log("User saved to session storage");
      return sessionStorage.setItem("user", user);
    } else {
      return console.error("No user to save in session storage");
    }
  } catch (error) {
    return console.error("Could not save user in session storage");
  }
};

// removes a user from session user
const removeUserFromSessionStorage = async (authorizedUser) => {
  const user = await authorizedUser;
  try {
    if (user) {
      console.log("User cleared from session storage");
      return sessionStorage.clear(user);
    } else {
      return console.error("Could not find user to remove in session storage");
    }
  } catch (error) {
    return console.error("Could not clear session storage");
  }
};

// checks if there is a user in session storage
// returns user if there is.
const getUserFromSessionStorage = async () => {
  const userFromSessionStorage = await sessionStorage.getItem("user");
  try {
    if (userFromSessionStorage) {
      console.log("User Was Found in Session storage");
      return userFromSessionStorage;
    } else {
      console.error("No user found in session storage");
    }
  } catch (error) {
    console.error("Could not get user from session storage ");
  }
};
