import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import FragmentSupportingSwitch from "./helpers/fragment-support-switch";
import { useAuth } from "../../contexts/auth-context";
import PageLoading from '../../components/loading/page-loading';
import SharedRoutes from "./shared";
import PublicRoutes from "./public";
import PrivateRoutes from "./private";

export default function Routes() {
  const user = useAuth().getUser();

  return (
    <Router>
      <Suspense fallback={<PageLoading />}>
        <FragmentSupportingSwitch>
          {PublicRoutes({ user })}
          {PrivateRoutes({ user })}
          {SharedRoutes()}
        </FragmentSupportingSwitch>
      </Suspense>
    </Router>
  );
}
