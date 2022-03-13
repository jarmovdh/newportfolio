import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { gsap } from "gsap";

import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  const onEnter = (node) => {
    console.log(node);
  };

  const onExit = (node) => {
    console.log(node);
  };

  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
