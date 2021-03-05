import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import Library from "./pages/LibraryPage";
import Gift from "./pages/GiftPage";
import Entry from "./pages/EntryPage";
import Navbar from "./components/Navbar";
import ShoppingCart from "./components/ShoppingCart";
// https://console.developers.google.com/apis/credentials/domainverification?project=stories-told-300002
// https://console.cloud.google.com/apis/credentials/consent/edit;newAppInternalUser=false?authuser=6&project=stories-told-301900&supportedpurview=project

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        {/* <Route exact path="/Library">
          <Library />
        </Route> */}
        <Route exact path="/Gift">
          <Gift />
        </Route>
        <Route exact path="/Entry">
          <Entry />
        </Route>
        <Route exact path="/ShoppingCart">
          <ShoppingCart />
        </Route>
      </Switch>
      {/* </AuthProvider> */}
    </Router>
  );
}

export default App;
