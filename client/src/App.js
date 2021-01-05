import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Library from "./pages/LibraryPage";
import Gift from "./pages/GiftPage";
import Entry from "./pages/EntryPage";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/Library">
            <Library />
          </Route>
          <Route exact path="/Gift">
            <Gift />
          </Route>
          <Route exact path="/Entry">
            <Entry />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
