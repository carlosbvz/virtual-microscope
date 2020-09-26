import React from "react";
import { Route, Redirect } from "react-router-dom";
import { homePageRoute, signInPageRoute } from "./helpers/routes-names";

// Pages, I do not need to lazy load this one, since it is ok to wait to sign in.
import SignInPage from "../../pages/sign-in-page";

// Add Public routes here
export default function PublicRoutes({ user }) {
  return (
    <>
      <Route
        exact
        path={signInPageRoute}
        render={(props) =>
          user ? (
            <Redirect
              to={{ pathname: homePageRoute, state: { from: props.location } }}
            />
          ) : (
            <SignInPage />
          )
        }
      />
    </>
  );
}
