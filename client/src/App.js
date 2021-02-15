import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Library from "./pages/LibraryPage";
import Gift from "./pages/GiftPage";
import Entry from "./pages/EntryPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import UpdateProfile from "./components/UpdateProfile";
import ForgotPassword from "./components/ForgotPassword";
// https://console.developers.google.com/apis/credentials/domainverification?project=stories-told-300002
// https://console.cloud.google.com/apis/credentials/consent/edit;newAppInternalUser=false?authuser=6&project=stories-told-301900&supportedpurview=project

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/Dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/Update-Profile">
          <UpdateProfile />
        </Route>
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
        <Route path="/Login" component={Login} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Forgot-Password" component={ForgotPassword} />
      </Switch>
      {/* </AuthProvider> */}
    </Router>
  );
}

export default App;
