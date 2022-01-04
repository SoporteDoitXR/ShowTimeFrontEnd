/*
  ESTE COMPONENTE ES DE MODAL DE CARGA MASIVA
  SU FUNCION ES MOSTRAR UN FORMULARIO PARA CARGA MASIVA DE USUARIOS O EMPRESAS

  CARGA UN EXCEL O PDF CON LISTA DE USUARIOS O EMPRESAS PARA UNA CARGA MASIVA DE ELLOS
  EL PROP DE "TYPE" SE USARA PARA SABER SI ES UNA CARGA DE USUARIOS O EMPRESAS
*/

import React, { useRef, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { RiDownloadFill } from "react-icons/ri";
import Button from "../UI/Button";

const AddMasive = ({ type }) => {
  const hiddenFileUpload = useRef(null);
  return (
    <div className="d-flex flex-column justify-content-between col-10 mx-auto h-65 pb-3 poppins-light">
      <div className="fs-5">Subir plantilla</div>
      <input className="d-none" type="file" ref={hiddenFileUpload} />
      <Button
        className="btn btn-dark px-3 d-flex justify-content-between py-3"
        rounded={"semi"}
        text="Seleccionar archivo"
        iconRight={FiPlusCircle}
        iconClassName={"fs-4"}
        onClick={() => hiddenFileUpload.current.click()}
      />
      <div className="fs-5">Descargar plantilla</div>
      <Button
        className="btn btn-dark px-3  d-flex justify-content-between py-3"
        rounded={"semi"}
        text="Descargar"
        iconRight={RiDownloadFill}
        iconClassName={"fs-4"}
      />
    </div>
  );
};
export default AddMasive;
