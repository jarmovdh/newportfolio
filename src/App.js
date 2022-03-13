import React from "react";
import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./components/Header";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <div className="container">
        <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
