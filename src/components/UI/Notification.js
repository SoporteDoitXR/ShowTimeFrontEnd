/*
    COMPONENTE REUTILIZABLE DE NOTIFICACIONES
    PROPS TYPE ES EL TIPO DE NOTIFICACION, INFLUYE EN EL ICONO
    TYPE: 
    -"check-gray":
    -"check-blue":
    -"error-red":
    -"error-yellow":
*/

import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdClose, MdError } from "react-icons/md";

const Notification = ({ type, text, onClick }) => {
  const checkType = (type) => {
    switch (type) {
      case "check-gray":
        return (
          <FaCheckCircle className="text-gray bg-white rounded-pill fs-3" />
        );
        break;
      case "check-blue":
        return (
          <FaCheckCircle className="text-blue bg-white rounded-pill fs-3" />
        );
        break;
      case "error-red":
        return <MdError className="text-danger bg-white rounded-pill fs-3" />;
        break;
      case "error-yellow":
        return <MdError className="text-warning bg-white rounded-pill fs-3" />;
        break;

      default:
        return <></>;
        break;
    }
  };
  return (
    <div className="dark-bg-1 w-full p-3 rounded-xl d-flex gap-4">
      {checkType(type)}{" "}
      <div className="poppins-medium text-white fs-5 user-select-none">
        {text}
      </div>
      <MdClose
        className="text-white cursor-pointer ms-auto"
        onClick={onClick}
      />
    </div>
  );
};
export default Notification;
