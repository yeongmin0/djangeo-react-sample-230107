import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Path from "../../utils/routes";
import Error404 from "../error/Error404";
import LoginPage from "../login/LoginPage";

const UnauthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path={Path.LOGIN} element={<LoginPage />} />
      <Route path={Path.ERROR404} element={<Error404 />} />
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
};

export default UnauthenticatedRoutes;
