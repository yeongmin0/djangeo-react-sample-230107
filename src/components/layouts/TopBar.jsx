import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../store/auth/useAuth";

const TopBar = (props) => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <header className="w-full h-32 border-b shadow-md grid grid-cols-6 gap-8 items-center">
      <h1 className="text-4xl font-bold uppercase select-none">React Sample</h1>
      <ul className="col-span-3 flex flex-row gap-4 font-bold text-lg">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/todo">
          <li>Todo List</li>
        </Link>
        <Link to="/ui">
          <li>UI</li>
        </Link>
      </ul>
      <div className="col-span-2">
        <div className="h-10 w-10 bg-black rounded-full" />
        <button
          className="border border-dark rounded-md px-2 py-1 uppercase"
          onClick={() => {
            if (isAuthenticated) {
              logout();
            } else {
              login();
            }
          }}
        >
          {isAuthenticated ? "Logout" : "Login"}
        </button>
      </div>
    </header>
  );
};

export default TopBar;
