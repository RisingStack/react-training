import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getItem, AUTHORIZATION } from "../../utils";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const token = getItem(AUTHORIZATION);
  return (
    <Route
      {...rest}
      render={props =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
