import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App