import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import UsersList from "./components/UsersList";
import EditUser from "./components/EditUser";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const token = localStorage.getItem("token");
    return !!token; // If token is null or undefined, this will return false
  });

  // Listen for token changes across tabs
  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(!!localStorage.getItem("token"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/users" replace />
            ) : (
              <Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />
        <Route
          path="/login"
          element={<Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/users"
          element={
            isAuthenticated ? (
              <UsersList setIsAuthenticated={setIsAuthenticated} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/edit-user/:id"
          element={
            isAuthenticated ? <EditUser /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
