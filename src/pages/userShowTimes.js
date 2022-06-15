/*
  ESTE DOCUMENTO ES LA PAGINA PRINCIPAL DE USUARIO, PERMITE CREAR SHOWTIMES, VER LOS SHOWTIMES O EVENTOS CREADOS,
  VER INFORMES DE EVENTOS ACTUALES O PASADOS Y LA EDICION O GESTION DE INFORMACION DE USUARIO

  TEMPORALMENTE, SE ESTAN CONTROLANDO LAS SECCIONES DE VER SHOWTIMES Y CONFIGURACION DE USUARIO POR UN ESTADO/STATE
*/

import React, { useEffect, useState } from "react";
import { HiCube } from "react-icons/hi";
import { IoDocumentTextSharp, IoSettingsSharp } from "react-icons/io5";
import { MdAddCircle } from "react-icons/md";
import { useNavigate } from "react-router";
import AdminShowtimes from "../components/userAdmin/adminShowtimes";
import UserProfile from "../components/userAdmin/userProfile";
import { getIdUser } from "../providers/cookie-user";

const userShowTimes = () => {
  let navigation = useNavigate();

  /*useEffect(() => {
    !getIdUser() && navigation("/login");
  }, []);*/

  const [component, setcomponent] = useState(0);
  return (
    <div className="row me-0 h-full overflow-hidden">
      <div className="col-2 bg-dark text-white poppins-bold page-height">
        {/* CREAR SHOWTIME, SOLO PONER EN NAVIGATION LA DIRECCION FINAL PARA REDIRECCIONAR A CREAR SHOWTIME */}
        <div
          className="d-flex fs-5 ms-4 py-3 my-5 cursor-pointer"
          onClick={() => navigation("/")}
        >
          <MdAddCircle className="fs-3 me-2" />
          Crear Showtime
        </div>

        {/* VER SHOWTIMES CREADOS */}
        <div
          className="d-flex fs-5 ms-4 py-3 my-5 cursor-pointer"
          onClick={() => setcomponent(0)}
        >
          <HiCube className="fs-3 me-2" />
          Mis Showtime
        </div>

        {/* VER INFORMES DE SHOWTIMES */}
        <div className="d-flex fs-5 ms-4 py-3 my-5 cursor-pointer">
          <IoDocumentTextSharp className="fs-3 me-2" />
          Ver informes
        </div>

        {/* CONFIGURACION DE CUENTA DE USUARIO */}
        <div
          className="d-flex fs-5 ms-4 py-3 my-5 cursor-pointer"
          onClick={() => setcomponent(1)}
        >
          <IoSettingsSharp className="fs-3 me-2" />
          Conf. Cuenta
        </div>
      </div>

      {/* SECCION DE COMPONENTES */}
      <div className="col ">
        <div className="col-10 mx-auto mt-5">
          {component == 0 && <AdminShowtimes />}
          {component == 1 && <UserProfile />}
        </div>
      </div>
    </div>
  );
};
export default userShowTimes;
