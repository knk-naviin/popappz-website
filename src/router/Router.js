import React from "react";
import React from "react";
import Home from "../section/Home";
import About from "../section/About";
import Product from "../section/Product";
import Service from "../section/Service";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const router = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/service" element={<Service />} />
    </Routes>
  );
};

export default router;
