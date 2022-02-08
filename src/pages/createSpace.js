/*
  ESTE ES UN DOCUMENTO DE PAGINA PRINCIPAL PARA CREAR ESPACIO/SHOWTIME, TIENE 3 COMPONENTES:
  -CREATESHOWTIME (FORMULARIO DE NOMBRE Y DESCRIPCION DE EVENTO)
  -SELECTTEMPLATE (SELECCION DE ESCENAS/PLANTILLAS A USAR)
  -SELECTSCENE (SELECCION DE ESCENA A EDITAR)

  TEMPORALMENTE HACE USO DE ESTADOS/STATES PARA MOVERSE ENTRE COMPONENTES


  -----DATO IMPORTANTE-----
  NO ESTA CREADA LA ESCENA DE PERSONALIZACION DE COLORES POR PETICION DE CLIENTES
  DICHA ESCENA SE PUEDE VER EN EL XD WEB
*/

import React, { useState } from "react";
import { useNavigate } from "react-router";
import CreateShowTime from "../components/createShowtime/createShowTime";
import SelectScene from "../components/createShowtime/selectScene";
import SelectTemplate from "../components/createShowtime/selectTemplate";

const CreateSpace = () => {
  let navigation = useNavigate();
  const [sceneCreator, setSceneCreator] = useState(0);

  return (
    <div className={`page-height ${sceneCreator > 0 && "primary-bg"}`}>
      <div
        className={`container-fluid border-bottom border-2 ${
          sceneCreator > 0 ? "border-light text-white" : "border-dark"
        }`}
      >
        <div className="d-flex justify-content-center poppins-medium fs-7">
          <div
            className={`mx-5  " ${
              sceneCreator == 0
                ? "py-2 px-4 my-1 bg-info rounded-pill"
                : "my-auto"
            }`}
          >
            1. Info
          </div>
          <div
            className={`mx-5  " ${
              sceneCreator >= 1
                ? "py-2 px-4 my-1 selector-bg rounded-pill"
                : "my-auto"
            }`}
          >
            2. Escenarios
          </div>
        </div>
      </div>
      {/* SECCION DE COMPONENTES */}
      <div className="container mt-5">
        {sceneCreator == 0 && (
          <CreateShowTime sceneController={setSceneCreator} />
        )}
        {sceneCreator == 1 && (
          <SelectTemplate sceneController={setSceneCreator} />
        )}
        {sceneCreator == 2 && <SelectScene sceneController={setSceneCreator} />}
      </div>
    </div>
  );
};
export default CreateSpace;
