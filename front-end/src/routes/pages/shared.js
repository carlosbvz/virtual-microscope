import React from "react";
import { Route } from "react-router-dom";

// Pages, Lazy load them :3
const NotFoundPage = React.lazy(() => import('../../pages/404-page'));
// Add Shared routes (for both auth and none auth) here
export default function SharedRoutes() {
  return (
    <>
      <Route component={NotFoundPage} />
    </>
  );
}
