import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./components/Header";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/About", name: "About", Component: About },
];

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
