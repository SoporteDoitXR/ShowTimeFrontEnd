/*
  PAGINA PRINCIPAL DE ENRETAMIENTO

  ----------PARA LAS RUTAS, HACE USO DE REACT-ROUTER-DOM V6----------------

  LAS RUTAS NO SON DEFINITIVAS, Y PARA CAMBIARSE, SE DEBEN CAMBIAR TANTO EN ESTE ARCHIVO, COMO EN LOS CORRESPONDIENTES
  ELEMENTOS ENRUTADORES EN EL PROOYECTO
*/

import React, { useEffect, useState, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router";

import EditScenario from "./pages/editScene";
import CreateShowTime from "./pages/createSpace";
import Navbar from "./components/navbar";
import IndexModal from "./components/modal";
import Login from "./pages/login";
import RecoverPassword from "./pages/recoverPassword";
import UserShowTimes from "./pages/userShowTimes";
import EditPavilion from "./pages/createPavilion";
import EditNetworking from "./pages/createNetworking";
import CreateMeeting from "./pages/createMeeting";
import CreatePrivate from "./pages/createPrivate";
//import PrivateRoute from "./utils/privateRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "universal-cookie";
import { Navigate, useLocation } from 'react-router-dom';
import { tokenRefreshAuth } from "./providers/auth";
import { saveToken } from "./providers/cookie-user";
import HomePage from "./pages/homePage";
import Register from "./pages/register";
import Reception from "./pages/reception";
import Stand from "./pages/stand";
import Conference from "./pages/conference";

export default function App() {
  const cookies = new Cookies();
  const [ authenticated, setAuthenticated ] = useState(false);

  useEffect(()  => {
    if(cookies.get("cookieExpires")){
      setAuthenticated(true);
    }else{
      setAuthenticated(false);
      <Navigate to="/reception" />
    }
  },[authenticated])

  const PrivateRoute = () => {
    if(authenticated === false){
      return (
        <>
          <Navigate to="/login" />
        </>
      )
    }
      return (
        <>
          <Outlet  /> 
        </>
      )
  }

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/reception" element={<Reception />} />
          <Route path="/recoverPassword" element={<RecoverPassword />} />
          {/*{(aut) ? 
            <Route exact element={<PrivateRoute  />}>*/}
              <Route exact path="/admin" element={<UserShowTimes />} />
              <Route exact path="/" element={<HomePage />} />
              {/*<Route exact path="/" element={<CreateShowTime />} />*/}
              <Route exact path="/stand/:slug" element={<Stand />} />
              <Route exact path="/conference/:id" element={<Conference />} />
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
            {/*</Route>
            :
            null
            }*/}
        </Routes>
        <Outlet />
      </div>
    </Router>
  );
}