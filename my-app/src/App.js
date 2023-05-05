import React, { useState } from "react";
import "./App.css";
import AdminDashboard from "./Components/AdminDashboard";

import Login from "./Components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
         <AdminDashboard/>
        
        </>
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
