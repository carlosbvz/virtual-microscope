import React from "react";
import withDefaultLayout from "../layouts/default";

function NotFound() {
  return (
    <>
      <p>404 Page Not Found</p>
      <p>
        Go to {">"}
        <a href="/">Home Page</a>
      </p>
    </>
  );
}
const NotFoundPage = withDefaultLayout({ WrappedComponent: NotFound });
export default NotFoundPage;
