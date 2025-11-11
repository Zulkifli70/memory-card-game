import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Card from "./components/card";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <Navbar />
        <Card />
      </div>
    </>
  );
}

export default App;
