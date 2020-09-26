import React from "react";
import { Route, Redirect } from "react-router-dom";
import {
  homePageRoute,
  signInPageRoute,
  interactiveImagePageRoute,
  uploadImageRoute
} from "./helpers/routes-names";

// Pages Lazy load them :3
const HomePage = React.lazy(() => import('../../pages/home-page'));
const LeafletInteractivePage = React.lazy(() => import('../../pages/interactive-image-page'));
const UploadImagePage = React.lazy(() => import('../../pages/upload-image-page'));

function PrivateRoute({ component: Component, user, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: signInPageRoute, state: { from: props.location } }}
          />
        )
      }
    />
  );
}
// Add Private Routes Here
export default function PrivateRoutes({ user }) {
  return (
    <>
      <PrivateRoute
        exact
        user={user}
        path={homePageRoute}
        component={HomePage}
      />
      <PrivateRoute
        exact
        path={interactiveImagePageRoute}
        user={user}
        component={LeafletInteractivePage}
      />
      <PrivateRoute
        exact
        path={uploadImageRoute}
        user={user}
        component={UploadImagePage}
      />
    </>
  );
}
