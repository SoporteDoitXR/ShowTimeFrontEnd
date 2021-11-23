import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router";

import EditScenario from "./pages/editScene";
import CreateShowTime from "./pages/createSpace";
import Navbar from "./components/navbar";
import IndexModal from "./components/modalEdit";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<CreateShowTime />} />
          <Route path="editScene" element={<EditScenario />}>
            <Route path="modal" element={<IndexModal />} /> "/modal"
          </Route>
        </Routes>
        <Outlet />
      </div>
    </Router>
  );
}
