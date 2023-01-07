import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../login/LoginPage";

const UnauthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
};

export default UnauthenticatedRoutes;
