import React, { useCallback } from "react";
import { Navigate } from "react-router-dom";

const Element = ({ item }) => {
  const user = localStorage.getItem("user")
  const { element, isAuthProtected } = item;

  const Render = useCallback(() => {
    if (!user && isAuthProtected) return <Navigate to="/user" />;

    return <>{element}</>;
  }, [element]);

  return <Render />;
};

export default Element;
