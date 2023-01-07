import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import TopBar from "./components/layouts/TopBar";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";
import UnauthenticatedRoutes from "./components/routes/UnauthenticatedRoutes";

function App() {
  // 지금은 여기서 그냥 true, false 전환으로.
  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    <div className="App">
      <TopBar
        isAuthenticated={isAuthenticated}
        setAuthenticated={setAuthenticated}
      />
      {
        // short circuit 설명은 나중에.
        // 지금 이해할 동작: 이게 리액트에서 if 대신 쓴다고 우선 역할부터 이해.
        isAuthenticated && <ProtectedRoutes />
      }
      {!isAuthenticated && <UnauthenticatedRoutes />}
    </div>
  );
}

export default App;
