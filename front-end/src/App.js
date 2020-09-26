import React from "react";
import { AuthProvider } from "./contexts/auth-context";
import Routes from "./routes/pages";
import "./App.css";

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
