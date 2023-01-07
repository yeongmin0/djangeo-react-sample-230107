import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Path from "../../utils/routes";
import LoginPage from "../login/LoginPage";

const UnauthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path={Path.LOGIN} element={<LoginPage />} />
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
};

export default UnauthenticatedRoutes;
