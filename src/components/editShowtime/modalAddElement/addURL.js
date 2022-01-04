/*
  ESTE COMPONENTE ES DE MODAL DE AGREGAR URL
  SU FUNCION ES MOSTRAR UN CUADRO PARA AGREGAR UNA URL Y DEFINIR QUE HACER CON EL URL
*/

import React, { useState } from "react";
import Input from "../../UI/Input";

const addURL = () => {
  return (
    <>
      <div className="col-12 text-white text-center my-auto">
        <div className="fs-3">Agrega un URL</div>

        <div className="col-9 mx-auto ">
          <Input
            id={"url"}
            text={"Agrega el url que desees"}
            placeholder={"Agregar URL"}
            type={"text"}
            color="dark"
          />
        </div>
      </div>
    </>
  );
};
export default addURL;
