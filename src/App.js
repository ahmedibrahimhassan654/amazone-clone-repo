import React, { useEffect } from "react";

import "./App.css";
import Header from "./components/Header";
import Home from "./components/home/Home";
import Checkout from "./components/Checkout/Checkout";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import { auth } from "./firbase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only work once when the app component load
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is loged in /the user was logged in
        dispatch({
          type: "SETUSER",
          user: authUser,
        });
      } else {
        //the user loged out
        dispatch({
          type: "SETUSER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
