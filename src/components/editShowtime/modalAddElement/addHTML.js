/*
  ESTE COMPONENTE ES DE MODAL DE AGREGAR HTML
  SU FUNCION ES MOSTRAR UN CUADRO PARA AGREGAR UNA HTML
*/

import React, { useState } from "react";
import Input from "../../UI/Input";

const addHTML = () => {
  return (
    <>
      <div className="col-12 text-white text-center my-auto">
        <div className="fs-3">Agrega un HTML embed</div>

        <div className="col-10 mx-auto ">
          <Input
            id={"html"}
            size={"xl"}
            text={"Agrega el codigo HTML"}
            placeholder={"Agregar HTML"}
            type={"textarea"}
            color="dark"
          />
        </div>
      </div>
    </>
  );
};
export default addHTML;
