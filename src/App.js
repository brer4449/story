import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Library from "./pages/LibraryPage";
import Gift from "./pages/GiftPage";
import Signup from "./pages/SignupPage";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import db from "./firebase";

function App() {
  return (
    <Router>
      <div>
        {db.collection("email").onSnapshot((snapshot) => {
          snapshot.docs.map((doc) => console.log(doc.data()));
        })}
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
          <Route exact path="/Signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
