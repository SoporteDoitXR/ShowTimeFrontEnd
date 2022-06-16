/*
  ESTE COMPONENTE ES DE PAGINA DE NETWORKING Y MEETING
  SU FUNCION ES MOSTRAR UN FORMULARIO PARA CREAR USUARIOS, EMPRESAS O CARGA MASIVA DE ALGUNO DE ELLOS, TAMBIEN
  PARA LA CREACION DE UNA NUEVA CONFERENCIA

  HACE USO DE PROPS TYPE PARA MOSTRAR UNO Y OTRO COMPONENTE:
  -ADDUSER, COMPONENTE DE CREACION DE USUARIOS (REUTILIZABLE PARA CREACION DE EMPRESAS)
  -ADDMEETING,  COMPONENTE PARA CREACION DE NUEVA CONFERENCIA
  -ADDMASIVE, COMPONENTE DE CARGA MASIVA


  ESTE COMPONENTE HACE USO DEL CODIGO DE REDIMENCIONAMIENTO POR JAVASCRIPT
  ES NECESARIO UBICAR LOS ELEMENTOS POR EJES X/Y Y SI ES NECESARIO, TAMBIEN SU WIDTH Y HEIGHT
*/

import React, { useState } from "react";
import Button from "../UI/Button";
import Div from "../canvas2d/div";
import AddUser from "./addUser";
import AddMeeting from "./addMeeting";
import AddMasive from "./addMasive";

const IndexMiniModal = ({ type, setShowModal }) => {
  const [onSubmit, setOnSubmit] = useState();
  const prueba = () => {
    console.log("llegue");
  }

  return (
    <>
      <div className="modal d-block bg-dark-transparent z-10"></div>
      <Div
        className="modal-content dark-bg-2 text-white rounded-xl border-2 border-light z-10 poppins-medium "
        width={600}
        height={
          type == "addUser" ? 900 : type.includes("addMasive") ? 500 : 800
        }
        positionX={660}
        positionY={
          type == "addUser" ? 90 : type.includes("addMasive") ? 290 : 140
        }
      >
        <div className="modal-header border-0">
          <div className="fs-3">
            {type == "addUser"
              ? "Nuevo usuario"
              : type.includes("addMasive")
              ? "Carga Masiva"
              : "Nueva conferencia"}
          </div>
        </div>
        {/* SECCION DE COMPONENTES SEGUN PROP: TYPE */}
        {type == "addUser" && <AddUser setOnSubmit={setOnSubmit} setShowModal={setShowModal}/>}
        {type == "addMeeting" && <AddMeeting />}
        {type.includes("addMasive") && <AddMasive type={type} />}
        {/*<div className="modal-footer border-0 mb-3 justify-content-center">
          <Button
            className="btn btn-dark px-5 poppins-bold"
            text="Cancelar"
            onClick={() => setShowModal(false)}
          />
          <Button type="submit" onClick={() => prueba} className="btn btn-light px-5 poppins-bold" text="Guardar" />
      </div>*/}
      </Div>
    </>
  );
};
export default IndexMiniModal;
