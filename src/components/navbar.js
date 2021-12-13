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

const Navbar = () => {
  let navigation = useNavigate();
  const [showNavbar, setShowNavbar] = useState(false);
  const [showCollapse, setShowCollapse] = useState("d-none");

  return (
    <>
      {!useLocation().pathname.includes("/editScene") && (
        <div className="navbar navbar-dark bg-dark z-10">
          <button className="navbar-toggler ms-3" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="d-flex me-4 ">
            <img
              src={profileIMG}
              alt=""
              className="navbar h-8 rounded-circle"
            />
            <FaRegQuestionCircle className="text-primary ms-3 fs-2 my-auto" />
          </div>
        </div>
      )}
      {useLocation().pathname.includes("/editScene") && (
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
                }}
              />
            )}
          </Div>

          <div
            className={`bg-dark d-flex justify-content-between ${
              showNavbar ? "slideInDown" : "slideOutUp"
            }`}
          >
            <button
              className="navbar-dark navbar-toggler ms-3 my-2"
              type="button"
              onClick={() => setShowCollapse("slideInLeft")}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="d-flex me-4 ">
              <div className="me-5 navbar">
                <Button
                  className="btn btn-dark border border-light text-white px-3 poppins-medium fs-6"
                  rounded={"semi"}
                  text="Tu espacio"
                  iconLeft={HiCube}
                  iconClassName="fs-4 text-primary"
                  onClick={() => navigation("editScene/modal")}
                />
              </div>
              <img
                src={profileIMG}
                alt=""
                className="navbar h-8 rounded-circle my-auto"
              />
              <FaRegQuestionCircle className="text-primary ms-3 fs-2 my-auto" />
            </div>
          </div>

          {/* menu lateral */}
          <Div
            className={`bg-dark border-end border-5 border-primary d-flex flex-column poppins-light fs-7 ${showCollapse}`}
            width={120}
            height={920}
          >
            <button
              type="button"
              className="btn-close btn-close-white mx-auto my-2 h-5 w-5"
              aria-label="Close"
              onClick={() => setShowCollapse("slideOutLeft")}
            ></button>
            <div className="d-flex flex-column justify-content-between h-75 mt-3">
              <div className="text-white d-flex flex-column mx-auto ">
                <HiCube className="fs-4 mx-auto" />
                Escenario 3D
              </div>
              <div className="text-white d-flex flex-column mx-auto">
                <FaUserAlt className="fs-4 mx-auto" />
                Usuarios
              </div>
              <div className="text-white d-flex flex-column mx-auto">
                <FaBuilding className="fs-4 mx-auto" />
                Empresas
              </div>
              <div className="text-white d-flex flex-column mx-auto">
                <RiSlideshow2Fill className="fs-4 mx-auto" />
                Conferencias
              </div>
              <div className="text-white d-flex flex-column mx-auto">
                <FaCalendarAlt className=" fs-4 mx-auto" />
                Calendario
              </div>
              <div className="text-white d-flex flex-column mx-auto">
                <GoGraph className="fs-4 mx-auto" />
                Reportes
              </div>
              <div className="text-white d-flex flex-column mx-auto">
                <IoNotifications className="fs-4 mx-auto" />
                Notificaciones
              </div>
              <div className="text-white d-flex flex-column mx-auto">
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
