// where we'll handle the apps main authentication

import React, { useState, useEffect, useContext, createContext } from "react";
import {
  getUserFromLocalStorage,
  saveUserToLocalStorage,
  removeUserFromLocalStorage,
} from "../storage/LocalStorage";
import { sendSignInCredentialsToServer } from "../services/GoGearServer";

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = async (email, password) => {
    try {
      let userForStorage = { email, password };
      // sign in to the server here
      // let userForStorage = await sendSignInCredentialsToServer()
      await setUser(userForStorage);
      await saveUserToLocalStorage(userForStorage);
    } catch (error) {
      return alert(`could not sign in ${error}`);
    }
  };

  const signup = (email, password) => {
    // sign up in the server here
  };

  const signout = async () => {
    // sign out of the server here
    await removeUserFromLocalStorage();
    setUser(false);
  };

  const checkLocalStorage = async () => {
    let storedUser = await getUserFromLocalStorage();
    if (storedUser) {
      signin(storedUser.email, storedUser.password);
    }
  };

  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    if (user) {
      setUser(user);
    } else {
      setUser(false);
    }
    return;
  }, [user]);

  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout,
    checkLocalStorage,
  };
}
