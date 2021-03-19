import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import Library from "./pages/LibraryPage";
import GettingStarted from "./pages/GettingStartedPage";
import About from "./pages/AboutPage";
import Navbar from "./components/Navbar";
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
        <Route exact path="/GettingStarted">
          <GettingStarted />
        </Route>
        {/* <Route exact path="/Entry">
          <Entry />
        </Route> */}
        <Route exact path="/About">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
