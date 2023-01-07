import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import TodoListPage from "../todolist/TodoListPage";

const ProtectedRoutes = () => {
  return (
    //
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo" element={<TodoListPage />} />
      <Route path="/ui" element={<Home />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default ProtectedRoutes;
