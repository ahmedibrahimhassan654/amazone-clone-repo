import React from "react";

import "./App.css";
import Header from "./components/Header";
import Home from "./components/home/Home";
import Checkout from "./components/Checkout/Checkout";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";

function App() {
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
