import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
import AccountManager from "./routes/account/components/AccountManager";
import HomeManager from "./routes/home/components/HomeManager";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" render={() => <HomeManager />} />
        <Route exact path="/account" render={() => <AccountManager />} />
      </Router>
    </div>
  );
}

export default App;
