/*
  ESTE COMPONENTE ES DE MODAL GLOBAL, SECCION DE NOTIFICACIONES
  SU FUNCION ES MOSTRAR LAS NOTIFICACIONES AL USUARIO
*/

import React, { useState } from "react";
import Notification from "../UI/Notification";

const notifications = () => {
  return (
    <div className="d-flex flex-column gap-4 h-85 custom-scroll my-auto mx-auto col-11 ">
      <Notification type={"check-gray"} text={"notificacion de ejemplo"} />
      <Notification type={"check-blue"} text={"notificacion de ejemplo"} />
      <Notification type={"error-red"} text={"notificacion de ejemplo"} />
      <Notification type={"error-yellow"} text={"notificacion de ejemplo"} />
    </div>
  );
};
export default notifications;
