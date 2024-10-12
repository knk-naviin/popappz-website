import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";

import NotFound from "../pages/NotFound";
import ServicesList from "../components/UI/ServicesList";
import OurGoals from "../components/UI/OurGoals";
import Services from "../pages/CardComponents";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />

      <Route path="/about" element={<ServicesList />} />
      <Route path="/service" element={<Services />} />
      <Route path="/ourgoals" element={<OurGoals />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
