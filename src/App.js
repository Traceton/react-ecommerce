import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import AccountManager from "./routes/account/components/AccountManager";
import HomeManager from "./routes/home/components/HomeManager";
import { UserContext } from "../src/UserContext";
import CreateAccount from "./routes/account/components/CreateAccount";

function App() {
  const [authorizedUser, setAuthorizedUser] = useState(null);

  const userProvider = useMemo(() => ({ authorizedUser, setAuthorizedUser }), [
    authorizedUser,
    setAuthorizedUser,
  ]);

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
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
