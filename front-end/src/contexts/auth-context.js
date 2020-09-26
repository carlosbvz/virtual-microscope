import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { signInApiRoute } from "../routes/api";
import { signInPageRoute } from "../routes/pages/helpers/routes-names";

const userCookieName = "userCookie";
const AuthContext = React.createContext();

function AuthProvider(props) {
  const { loadingUserData = false } = { ...props };
  const [data, setData] = useState({});
  const [userCookie, setUserCookie, removeUserCookie] = useCookies([
    userCookieName,
  ]);

  if (loadingUserData) {
    return <p>Loading...</p>;
  }
  const signin = ({email, password}) => {
    // TODO: Create a centralized service
    fetch(signInApiRoute, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email,
          password
        },
      }),
    })
      .then(function (response) {
        return response.text();
      })
      .then(function (data) {
        const parsedData = JSON.parse(data);
        if (parsedData.user) {
          const user = parsedData.user;
          setData({ user });
          setUserCookie(userCookieName, user);
        } else {
          if (parsedData.error) {
            
          }
        }
      });
  };
  const signout = () => {
    // TODO: Send hit to logout from server
    setData({});
    removeUserCookie(userCookieName);
    window.location.pathname = signInPageRoute;
  };
  const getUser = () => {
    const userCached = userCookie[userCookieName];
    const user = data?.user || userCached || null;
    return user;
  };

  return (
    <AuthContext.Provider
      value={{ data, signin, signout, getUser }}
      {...props}
    />
  );
}
const useAuth = () => React.useContext(AuthContext);
export { AuthProvider, useAuth };
