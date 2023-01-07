import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Path from "../../utils/routes";
import Error404 from "../error/Error404";
import Home from "../home/Home";
import TodoListPage from "../todolist/TodoListPage";
import UIPreview from "../ui/UIPreview";

const ProtectedRoutes = () => {
  const { HOME, TODOLIST, UI, ERROR404 } = Path;

  return (
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={TODOLIST} element={<TodoListPage />} />
      <Route path={UI} element={<UIPreview />} />
      <Route path={ERROR404} element={<Error404 />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default ProtectedRoutes;
