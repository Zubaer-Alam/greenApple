import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import firebase from "firebase/compat/app";

const PrivateRoute = () => {
  const user = firebase.auth().currentUser;
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
