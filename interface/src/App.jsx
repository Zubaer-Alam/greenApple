import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoutes";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

function App() {
  return (
    <div className="p-2 m-10 border-2 border-black rounded-lg justify-center ">
      <Router>
        <Routes>
          <Route exact path="/dashboard" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Navbar />} />
          </Route>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
