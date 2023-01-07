import React from "react";
import { Link } from "react-router-dom";

const TopBar = (props) => {
  const { isAuthenticated, setAuthenticated } = props;

  return (
    <header className="w-full h-32 border-b shadow-md grid grid-cols-6 gap-8 items-center">
      <h1 className="text-4xl font-bold uppercase">React Sample</h1>
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
          onClick={() => {
            setAuthenticated(!isAuthenticated);
          }}
        >
          (임시)인증전환
        </button>
      </div>
    </header>
  );
};

export default TopBar;
