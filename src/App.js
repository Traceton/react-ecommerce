import React, { useState, useMemo, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import "./navbar.css";
import AccountManager from "./routes/account/components/AccountManager";
import HomeManager from "./routes/home/components/HomeManager";
import { UserContext } from "./UserContext";
import { getUserFromSessionStorage } from "./SessionStorageApi";
import CreateAccount from "./routes/account/components/CreateAccount";
import UpdateAccount from "./routes/account/components/UpdateAccount";

// TODO: ADD SESSION STORAGE FOR THE USERS, MAKE APP LOOK MORE PROFESSIONAL.

function App() {
  const [authorizedUser, setAuthorizedUser] = useState(null);

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

  // changed project name test comment

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
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
