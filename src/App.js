import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Library from "./pages/LibraryPage";
import Gift from "./pages/GiftPage";
import Entry from "./pages/EntryPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
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
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
