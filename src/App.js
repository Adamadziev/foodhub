import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Order from "./pages/Order";

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="*" element={<Menu />}></Route>
      </Routes>
    </div>
  );
};

export default App;
