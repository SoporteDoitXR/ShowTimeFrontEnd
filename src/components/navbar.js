/*
  ESTE COMPONENTE ES EL NAVBAR QUE APARECE EN TODAS LAS PAGINAS
  YA QUE ALGUNAS PAGINAS DEL PROYECTO TRABAJAN DIFERENTES POR EL TEMA DE REDIMENCIONAMIENTO POR JAVASCRIPT,
  EL NAVBAR HA TENIDO QUE CAMBIAR, A TAL PUNTO EN QUE HAY 2 NAVBAR DIFERENTES

  ADEMAS, EL NAVBAR QUE APARECE EN RUTAS /edit... USA EL CODIGO DE POSICIONAMIENTO POR COORDENADAS, POSEE ANIMACIONES Y EL SIDEBAR QUE 
  PERMITE LA NAVEGACION ENTRE DIFERENTES ESCENAS, Y EL DESPLIEGUE DEL MODAL BASICO O ESPECIFICO (REPORTE, NOTIFICACIONES, AJUSTES)
*/

import React, { useState } from "react";
import profileIMG from "../assets/UI/profile.png";
import {
  FaRegQuestionCircle,
  FaUserAlt,
  FaBuilding,
  FaCalendarAlt,
} from "react-icons/fa";
import {
  RiArrowUpSLine,
  RiArrowDownSLine,
  RiSlideshow2Fill,
} from "react-icons/ri";
import { HiCube } from "react-icons/hi";
import { GoGraph } from "react-icons/go";
import { IoNotifications, IoSettingsSharp } from "react-icons/io5";
import Button from "./UI/Button";
import { Outlet, useNavigate, useLocation } from "react-router";
import Div from "./canvas2d/div";
import logoShowTime from "../assets/UI/Logo_showtime.png";
import { logOutUser } from "../providers/cookie-user";

const Navbar = () => {
  let navigation = useNavigate();
  let location = useLocation().pathname;
  const [showNavbar, setShowNavbar] = useState(true);
  const [showCollapse, setShowCollapse] = useState("d-none");
  const [showCollapseProfile, setShowCollapseProfile] = useState("d-none");

  const validateModalShow = (options) => {
    let isActive = false;
    for (const op of options) {
      location.includes(op) && (isActive = true);
    }
    return isActive;
  };

  return (
    <>
      {/* Navbar relativo convencional cuando no esta en ruta /edit... */}
      {!useLocation().pathname.includes("/edit") && (
        <div className="navbar navbar-dark bg-dark z-10">
          <div className="col-1 ms-5 ">
            <img className="w-full" src={logoShowTime} alt="" />
          </div>

          <div className="d-flex me-4 ">
            <img
              src={profileIMG}
              alt=""
              className="navbar h-8 rounded-circle cursor-pointer"
              onClick={() =>
                showCollapseProfile != "fadeIn"
                  ? setShowCollapseProfile("fadeIn")
                  : setShowCollapseProfile("fadeOut")
              }
            />
            <FaRegQuestionCircle className="text-primary ms-3 fs-2 my-auto" />
          </div>

          {/* MINI MENU COLAPSE */}
          <Div
            className={`bg-white rounded-xl d-flex flex-column poppins-medium fs-6 justify-content-evenly ps-2 ${showCollapseProfile}`}
            height={150}
            width={160}
            positionY={70}
            positionX={1440}
          >
            <div className="cursor-pointer hover-textPrimary text-black">
              Perfil
            </div>
            <div className="cursor-pointer hover-textPrimary text-black">
              Mis showtime
            </div>
            <div className="cursor-pointer hover-textPrimary text-black">
              Cambiar usuario
            </div>
            <div
              className="cursor-pointer hover-textPrimary text-black"
              onClick={() => {
                logOutUser();
                navigation("/login");
                setShowCollapseProfile("fadeOut");
              }}
            >
              Cerrar sesión
            </div>
          </Div>
        </div>
      )}

      {/* Navbar por coordenadas que solo aparece en ruta /edit... */}
      {useLocation().pathname.includes("/edit") && (
        <Div
          className="w-screen "
          zIndex={2}
          height={60}
          positionY={0}
          positionX={0}
        >
          <Div
            className="d-flex justify-content-center h-full"
            height={60}
            width={60}
            positionY={0}
            positionX={800}
          >
            {!showNavbar && (
              <RiArrowDownSLine
                className="my-auto text-white fs-1 w-10 cursor-pointer"
                onClick={() => setShowNavbar(!showNavbar)}
              />
            )}
            {showNavbar && (
              <RiArrowUpSLine
                className="my-auto text-white fs-1 w-10 cursor-pointer"
                onClick={() => {
                  setShowNavbar(!showNavbar);
                  showCollapse != "d-none" && setShowCollapse("slideOutLeft");
                  showCollapseProfile != "d-none" &&
                    setShowCollapseProfile("fadeOut");
                }}
              />
            )}
          </Div>

          <div
            className={`bg-dark d-flex justify-content-between ${
              showNavbar ? "slideInDown" : "slideOutUp"
            }`}
          >
            <div>
              <button
                className="navbar-dark navbar-toggler ms-3 my-2"
                type="button"
                onClick={() => setShowCollapse("slideInLeft")}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <img
                className={`w-11 ms-3  ${
                  showCollapse != "d-nonde" && showCollapse == "slideInLeft"
                    ? "logo-out"
                    : showCollapse == "slideOutLeft"
                    ? "logo-return"
                    : ""
                }`}
                src={logoShowTime}
                alt=""
              />
            </div>

            <div className="d-flex me-4 ">
              <div className="me-5 navbar">
                <Button
                  className="btn btn-dark border border-light text-white px-3 poppins-medium fs-6"
                  rounded={"semi"}
                  text="Tu espacio"
                  iconLeft={HiCube}
                  iconClassName="fs-4 text-primary"
                  onClick={() =>
                    validateModalShow(["/mn", "/mr", "ms"])
                      ? navigation(location.slice(0, -2) + "md")
                      : location.includes("/md")
                      ? navigation(location.slice(0, -3))
                      : navigation(location + "/md")
                  }
                />
              </div>
              <img
                src={profileIMG}
                alt=""
                className="navbar h-8 rounded-circle my-auto cursor-pointer"
                onClick={() =>
                  showCollapseProfile != "fadeIn"
                    ? setShowCollapseProfile("fadeIn")
                    : setShowCollapseProfile("fadeOut")
                }
              />
              <FaRegQuestionCircle className="text-primary ms-3 fs-2 my-auto" />
            </div>
          </div>

          {/* MINI MENU COLLAPSE DE PERFIL */}
          <Div
            className={`bg-white rounded-xl d-flex flex-column poppins-medium fs-6 justify-content-evenly ps-2 ${showCollapseProfile}`}
            height={150}
            width={160}
            positionY={70}
            positionX={1440}
          >
            <div className="cursor-pointer hover-textPrimary text-black">
              Perfil
            </div>
            <div className="cursor-pointer hover-textPrimary text-black">
              Mis showtime
            </div>
            <div className="cursor-pointer hover-textPrimary text-black">
              Cambiar usuario
            </div>
            <div className="cursor-pointer hover-textPrimary text-black">
              Cerrar sesión
            </div>
          </Div>

          {/* menu lateral */}
          <Div
            className={`bg-dark border-end border-5 border-primary d-flex flex-column poppins-light fs-7 h-screen ${showCollapse}`}
            width={120}
          >
            <button
              type="button"
              className="btn-close btn-close-white mx-auto my-2 h-5 w-5"
              aria-label="Close"
              onClick={() => setShowCollapse("slideOutLeft")}
            ></button>
            <div className="d-flex flex-column justify-content-between h-75 mt-3">
              <div className=" d-flex flex-column mx-auto cursor-pointer hover-textPrimary">
                <HiCube className="fs-4 mx-auto" />
                Escenario 3D
              </div>

              <div
                className=" d-flex flex-column mx-auto cursor-pointer hover-textPrimary"
                onClick={() =>
                  navigation("editNetworking", { state: { type: "users" } })
                }
              >
                <FaUserAlt className="fs-4 mx-auto" />
                Usuarios
              </div>
              <div
                className=" d-flex flex-column mx-auto cursor-pointer hover-textPrimary"
                onClick={() =>
                  navigation("editNetworking", { state: { type: "company" } })
                }
              >
                <FaBuilding className="fs-4 mx-auto" />
                Empresas
              </div>
              <div
                className=" d-flex flex-column mx-auto cursor-pointer hover-textPrimary"
                onClick={() => navigation("editMeeting")}
              >
                <RiSlideshow2Fill className="fs-4 mx-auto" />
                Conferencias
              </div>
              <div
                className=" d-flex flex-column mx-auto cursor-pointer hover-textPrimary"
                onClick={() => navigation("editPrivateMeeting")}
              >
                <FaCalendarAlt className=" fs-4 mx-auto" />
                Calendario
              </div>
              <div
                className=" d-flex flex-column mx-auto cursor-pointer hover-textPrimary"
                onClick={() =>
                  validateModalShow(["/mn", "/ms", "md"])
                    ? navigation(location.slice(0, -2) + "mr")
                    : location.includes("/mr")
                    ? navigation(location.slice(0, -3))
                    : navigation(location + "/mr")
                }
              >
                <GoGraph className="fs-4 mx-auto" />
                Reportes
              </div>
              <div
                className=" d-flex flex-column mx-auto cursor-pointer hover-textPrimary"
                onClick={() =>
                  validateModalShow(["/ms", "/mr", "md"])
                    ? navigation(location.slice(0, -2) + "mn")
                    : location.includes("/mn")
                    ? navigation(location.slice(0, -3))
                    : navigation(location + "/mn")
                }
              >
                <IoNotifications className="fs-4 mx-auto" />
                Notificaciones
              </div>

              <div
                className=" d-flex flex-column mx-auto cursor-pointer hover-textPrimary"
                onClick={() =>
                  validateModalShow(["/mn", "/mr", "md"])
                    ? navigation(location.slice(0, -2) + "ms")
                    : location.includes("/ms")
                    ? navigation(location.slice(0, -3))
                    : navigation(location + "/ms")
                }
              >
                <IoSettingsSharp className="fs-4 mx-auto" />
                Ajustes
              </div>
            </div>
          </Div>
        </Div>
      )}
      <Outlet />
    </>
  );
};

export default Navbar;
