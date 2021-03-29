export let getUserFromLocalStorage = async () => {
  let storedUser;
  try {
    let userFromLocalStorage = await localStorage.getItem("storedUser");
    if (userFromLocalStorage) {
      storedUser = await JSON.parse(userFromLocalStorage);
      return storedUser;
    } else {
      return null;
    }
  } catch (error) {
    return alert(`Could not get user from local storage ${error}`);
  }
};
export let saveUserToLocalStorage = async (userForStorage) => {
  try {
    // clears local storage before saving new user
    await localStorage.removeItem("storedUser");
    await localStorage.setItem("storedUser", JSON.stringify(userForStorage));
  } catch (error) {
    return alert(`could not save user to local storage ${error}`);
  }
};

export let removeUserFromLocalStorage = async () => {
  try {
    localStorage.removeItem("storedUser");
  } catch (error) {
    return alert(`could not clear local storage ${error}`);
  }
};

export let getUserEmailFromLocalStorage = async (emailForStorage) => {
  let storedEmail;
  try {
    let emailFromLocalStorage = await localStorage.getItem("storedEmail");
    if (emailFromLocalStorage) {
      storedEmail = await JSON.parse(emailFromLocalStorage);
      return storedEmail;
    } else {
      return null;
    }
  } catch (error) {
    return alert(`Could not get email from local storage ${error}`);
  }
};
export let saveUserEmailToLocalStorage = async (emailForStorage) => {
  try {
    // clears local storage before saving new user
    await localStorage.removeItem("storedEmail");
    await localStorage.setItem("storedEmail", JSON.stringify(emailForStorage));
  } catch (error) {
    return alert(`could not save email to local storage ${error}`);
  }
};

export let removeUserEmailFromLocalStorage = async () => {
  try {
    // clears email from local storage
    await localStorage.removeItem("storedEmail");
  } catch (error) {
    return alert(`could not remove email from local storage ${error}`);
  }
};
