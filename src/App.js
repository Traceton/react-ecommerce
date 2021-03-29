import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useAuth } from "./services/useAuth";
import TopNav from "./components/layout/TopNav";
import SideNav from "./components/layout/SideNav";
import SignIn from "./routes/authentication/SignIn";
import Dashboard from "./routes/dashboard/Dashboard";
import AccountHome from "./routes/account/AccountHome";
import SplashScreen from "./routes/authentication/SplashScreen";
import UnlockAccount from "./routes/authentication/UnlockAccount";
import ForgotPassword from "./routes/authentication/ForgotPassword";
import axios from "axios";

function App() {
  // used to render a splash screen while app checks for stored credentials
  const [isLoading, setIsLoading] = useState(true);
  // authorization hook wrapper
  const auth = useAuth();

  // Checks if a user is stored locally and can be authenticated automatically.
  useEffect(() => {
    // auth.checkLocalStorage();
    setIsLoading(false);

    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");

    // var raw = JSON.stringify({
    //   email: "admin@gogear.io",
    //   password: "G0G3ar!!",
    // });

    // var requestOptions = {
    //   method: "POST",
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: "follow",
    // };

    // fetch("http://localhost:3001/login", requestOptions)
    //   .then(async (response) => {
    //     await alert(`res -> ${response.data}`);
    //   })
    //   .catch((error) => alert("error", error));

    // const raw = JSON.stringify({
    //   email: "admin@gogear.io",
    //   password: "G0G3ar!!",
    // });

    // const headers = {
    //   "Content-Type": "application/json",
    // };

    // axios
    //   .post("http://localhost:3001/login", raw, { headers })
    //   .then((response) => alert(JSON.stringify(response)));

    // // signs user out after 30 mins
    // setTimeout(() => {
    //   auth.signout();
    // }, 1800000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <Switch>
        {isLoading ? (
          <>
            <Route exact path="/splash" component={SplashScreen} />
            <Redirect to="/splash" />
          </>
        ) : null}
        {!auth.user ? (
          <>
            <Route exact path="/" render={() => <SignIn />} />
            <Redirect to="/" />
            <Route exact path="/forgotpassword" component={ForgotPassword} />
            <Route exact path="/unlockaccount" component={UnlockAccount} />
          </>
        ) : (
          <div className="grid grid-cols-4">
            <div className="col-span-1 col-start-1">
              <SideNav />
            </div>
            <div className="col-span-3 col-start-2">
              <div>
                <TopNav />
              </div>
              <div className="">
                <Route exact path="/" component={Dashboard} />
                <Redirect to="/" />
                <Route exact path="/accounthome" component={AccountHome} />
              </div>
            </div>
          </div>
        )}
      </Switch>
    </Router>
  );
}

export default App;
