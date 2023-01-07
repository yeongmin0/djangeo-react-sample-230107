import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Path from "../../utils/routes";
import Home from "../home/Home";
import TodoListPage from "../todolist/TodoListPage";

const ProtectedRoutes = () => {
  const { HOME, TODOLIST, UI } = Path;

  return (
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={TODOLIST} element={<TodoListPage />} />
      <Route path={UI} element={<Home />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default ProtectedRoutes;
