/*
  PAGINA PRINCIPAL DE ENRETAMIENTO

  ----------PARA LAS RUTAS, HACE USO DE REACT-ROUTER-DOM V6----------------

  LAS RUTAS NO SON DEFINITIVAS, Y PARA CAMBIARSE, SE DEBEN CAMBIAR TANTO EN ESTE ARCHIVO, COMO EN LOS CORRESPONDIENTES
  ELEMENTOS ENRUTADORES EN EL PROOYECTO
*/

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router";

import EditScenario from "./pages/editScene";
import CreateShowTime from "./pages/createSpace";
import Navbar from "./components/navbar";
import IndexModal from "./components/modal";
import Login from "./pages/login";
import UserShowTimes from "./pages/userShowTimes";
import EditPavilion from "./pages/createPavilion";
import EditNetworking from "./pages/createNetworking";
import CreateMeeting from "./pages/createMeeting";
import CreatePrivate from "./pages/createPrivate";

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
            <Route path="md" element={<IndexModal type={"normal"} />} />
            <Route path="mr" element={<IndexModal type={"report"} />} />
            <Route path="mn" element={<IndexModal type={"notification"} />} />
            <Route path="ms" element={<IndexModal type={"settings"} />} />
          </Route>
          <Route path="editPavilion" element={<EditPavilion />}>
            <Route path="md" element={<IndexModal type={"normal"} />} />
            <Route path="mr" element={<IndexModal type={"report"} />} />
            <Route path="mn" element={<IndexModal type={"notification"} />} />
            <Route path="ms" element={<IndexModal type={"settings"} />} />
          </Route>
          <Route path="editNetworking" element={<EditNetworking />}>
            <Route path="md" element={<IndexModal type={"normal"} />} />
            <Route path="mr" element={<IndexModal type={"report"} />} />
            <Route path="mn" element={<IndexModal type={"notification"} />} />
            <Route path="ms" element={<IndexModal type={"settings"} />} />
          </Route>
          <Route path="editMeeting" element={<CreateMeeting />}>
            <Route path="md" element={<IndexModal type={"normal"} />} />
            <Route path="mr" element={<IndexModal type={"report"} />} />
            <Route path="mn" element={<IndexModal type={"notification"} />} />
            <Route path="ms" element={<IndexModal type={"settings"} />} />
          </Route>
          <Route path="editPrivateMeeting" element={<CreatePrivate />}>
            <Route path="md" element={<IndexModal type={"normal"} />} />
            <Route path="mr" element={<IndexModal type={"report"} />} />
            <Route path="mn" element={<IndexModal type={"notification"} />} />
            <Route path="ms" element={<IndexModal type={"settings"} />} />
          </Route>
        </Routes>
        <Outlet />
      </div>
    </Router>
  );
}
