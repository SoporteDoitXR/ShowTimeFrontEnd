import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router";

import EditScenario2 from "./pages/editScene2";
import EditScenario from "./pages/editScene";
import CreateShowTime from "./pages/createSpace";
import Navbar from "./components/navbar";
import IndexModal from "./components/modalEdit";
import Login from "./pages/login";
import UserShowTimes from "./pages/userShowTimes";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<CreateShowTime />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<UserShowTimes />} />
          <Route path="editScene" element={<EditScenario />}>
            <Route path="modal" element={<IndexModal />} /> "/modal"
          </Route>
          <Route path="editScene2" element={<EditScenario2 />}>
            <Route path="modal" element={<IndexModal />} /> "/modal"
          </Route>
        </Routes>
        <Outlet />
      </div>
    </Router>
  );
}
