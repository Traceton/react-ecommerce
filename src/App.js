import React, { useState, useMemo, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import "./navbar.css";
import AccountManager from "./routes/account/components/AccountManager";
import HomeManager from "./routes/home/components/HomeManager";
import { UserContext } from "./UserContext";
import {
  getUserFromSessionStorage,
  removeUserFromSessionStorage,
} from "./SessionStorageApi";
import CreateAccount from "./routes/account/components/CreateAccount";
import UpdateAccount from "./routes/account/components/UpdateAccount";
import Login from "./routes/account/components/Login";

function App() {
  // state of any authorized user is contained here.
  const [authorizedUser, setAuthorizedUser] = useState(null);
  // memo for authorized user state
  const userProvider = useMemo(() => ({ authorizedUser, setAuthorizedUser }), [
    authorizedUser,
    setAuthorizedUser,
  ]);

  useEffect(() => {
    //  get session users on init
    const getUserFromStorage = async () => {
      let userFromServer = await getUserFromSessionStorage();
      if (userFromServer) {
        setAuthorizedUser(userFromServer);
      }
    };
    getUserFromStorage();
  }, []);

  // clear any user account after 30 minutes
  const halfHour = 1800000;
  setTimeout(() => {
    if (authorizedUser) {
      removeUserFromSessionStorage(authorizedUser);
      setAuthorizedUser(null);
    } else {
      console.log("30 mins -> no user to clear from storage");
    }
  }, halfHour);

  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <ul>
            <Link to="/">Home</Link>
            <Link to="/account">My Account</Link>
          </ul>
        </div>
        <UserContext.Provider value={userProvider}>
          <Route exact path="/" render={() => <HomeManager />} />
          <Route exact path="/account" render={() => <AccountManager />} />
          <Route exact path="/createAccount" render={() => <CreateAccount />} />
          <Route exact path="/updateAccount" render={() => <UpdateAccount />} />
          <Route exact path="/login" render={() => <Login />} />
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
