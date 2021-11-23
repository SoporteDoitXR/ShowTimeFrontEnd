import React, { useState } from "react";
import profileIMG from "../assets/UI/profile.png";
import { FaRegQuestionCircle } from "react-icons/fa";
import { HiCube } from "react-icons/hi";
import Button from "./UI/Button";
import { Outlet, useNavigate } from "react-router";

const Navbar = () => {
  let navigation = useNavigate();
  return (
    <>
      <div className="navbar navbar-dark bg-dark z-10">
        <button className="navbar-toggler ms-3" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="d-flex me-4 ">
          <div className="me-5 navbar">
            <Button
              className="btn btn-dark border border-light text-white px-3"
              rounded={"semi"}
              text="Tu espacio"
              iconLeft={HiCube}
              iconClassName="fs-4 text-primary"
              onClick={() => navigation("editScene/modal")}
            />
          </div>
          <img src={profileIMG} alt="" className="navbar h-8 rounded-circle" />
          <FaRegQuestionCircle className="text-primary ms-3 fs-2 my-auto" />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
