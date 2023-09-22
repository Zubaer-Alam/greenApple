//import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import VariationForm from "./components/VariationForm";
import ProductForm from "./components/Forms/ProductEntry";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

function App() {
  return (
    <div className="p-2 m-10 border-2 border-black rounded-lg justify-center ">
      <Navbar />
    </div>
  );
}

export default App;
