import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
// Because of how browser router works, tries to render out our dashboard even when we're signed out, even when we're logged out, we're still able to access our dashboard (want to be redirected to login page)
// Create wrapper for our current route
export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        // check to see if we have a currentUser
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/Entry" />
        );
      }}
    ></Route>
  );
}
