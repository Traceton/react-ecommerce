import React, { useState, useMemo, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./navbar.css";
import AccountManager from "./routes/account/components/AccountManager";
import HomeManager from "./routes/home/components/HomeManager";
import { UserContext } from "./UserContext";
import {
  getUserFromSessionStorage,
  removeUserFromSessionStorage,
} from "./SessionStorageApi";
// import useHamburger from "./utils/useHamburger";
import CreateAccount from "./routes/account/components/CreateAccount";
import UpdateAccount from "./routes/account/components/UpdateAccount";
import Login from "./routes/account/components/Login";

function App() {
  // state of any authorized user is contained here.
  const [authorizedUser, setAuthorizedUser] = useState(null);
  const [navIsOpen, setNavIsOpen] = useState(false);
  // const [isHamburgerActive, handleChange] = useHamburger(
  //   <div>
  //     <Link to="/">Home</Link>
  //     <Link to="/buy">Buy</Link>
  //     <Link to="/sell">Sell</Link>
  //     <Link to="/account">Account</Link>
  //   </div>
  // );

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
        <header className="bg-gray-900 text-white">
          <div className="flex justify-between p-4 items-center  text-2xl  h-12 ">
            <div>
              <button className="hover:bg-blue-800 " type="button">
                React JS
              </button>
            </div>
            <div>
              <button
                className="hover:bg-blue-800 px-2 items-center flex"
                type="button"
                onClick={() => {
                  setNavIsOpen(!navIsOpen);
                }}
              >
                <img className="h-10" src="..//hamburger.jpg" alt="menu" />
              </button>
            </div>
          </div>
          <div
            className={
              navIsOpen
                ? "text-4xl text-center flex-col items-center px-2 pb-4"
                : "hidden"
            }
          >
            <Link className="block hover:bg-gray-800 rounded px-2" to="/">
              Home
            </Link>
            <Link
              className="block hover:bg-gray-800 rounded px-2 mt-1"
              to="/buy"
            >
              Buy
            </Link>
            <Link
              className="block hover:bg-gray-800 rounded px-2 mt-1"
              to="/sell"
            >
              Sell
            </Link>
            <Link
              className="block hover:bg-gray-800 rounded px-2"
              to="/account"
            >
              Account
            </Link>
          </div>
        </header>
        {/* <div className="">
          <ul className="">
            <Link className="" to="/">
              Home
            </Link>
            <Link className="" to="/buy">
              Buy
            </Link>
            <Link className="" to="/sell">
              Sell
            </Link>
            <Link className="" to="/account">
              Account
            </Link>
          </ul>
        </div> */}
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
