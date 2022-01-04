/*
  ESTE COMPONENTE QUE APARECE EN TODAS LAS PAGINAS DE SHOWTIME, ES UN MODAL GLOBAL
  SU FUNCION CAMBIA SEGUN EL TIPO DE USUARIO, LINK Y TYPE RECIBIDO POR PROP.
  ESTE MODAL SE DEPLIEGA AL AGREGAR UNA TERMINACION AL LINK DE LA PAGINA, PUEDE CAMBIARSE EN EL ARCHIVO APP.JS Y BOTON DEL NAVBAR CORRESPONDIENTE
  A SU VEZ, RECIBE UN PROP DEFINIDO EN APP.JS LLAMADO TYPE Y ESTE CAMBIA LA FUNCION DEL MODAL

  EN EL CASO DE QUE EL FINAL DEL LINK SEA /md Y TYPE= "NORMAL", DESPLIEGA EL MODAL BASICO DE EVENTO
  
    HACE USO DE ESTADOS/STATES PARA NAVEGAR ENTRE LOS COMPONENTES DEL MODAL Y CADA COMPONENTE DEBE VALIDAR EL TIPO DE USUARIO
    -FORMMODAL, SI ES ADMIN: DEBE MOSTRAR FORM E INFORMACION BASICA DEL EVENTO E INFORMACION DE CONTACTO.
                cUALQUIER OTRO USER QUE NO ES USUARIO, DEBE MOSTRAR LA INFORMACION GUARDADA POR EL ADMIN
    
    -SELECSCENE, SI ES ADMIN, DEBE MOSTRAR LAS ESCENAS Y AL DAR CLICK, IR A LA VISTA DE EDICION
                CUALQUIER OTRO USER DEBE ENVIAR A LA VISTA FINAL DE LA ESCENA YA EDITADA DEL EVENTO AL HACER CLICK
              
    -PERSONALIZATIONMODAL, SOLO SE DEBE MOSTRAR AL ADMIN Y PERMITE CAMBIAR EL COLOR GLOBAL DEL EVENTO
    -----NOTA----- COMPONENTE "PERSONALIZATIONMODAL" AUN NO ES CREADO PORQUE NO SE HA HABILITADO ESTA FUNCION


  LOS SIGUIENTES COMPONENTES NO HAN SIDO CREADOS PERO ESTA PREPARADO EN CODIGO PARA SU IMPLEMENTACION
  EN EL CASO DE QUE EL FINAL DEL LINK SEA /mr Y TYPE= "report", DESPLIEGA EL MODAL REPORTES
  EN EL CASO DE QUE EL FINAL DEL LINK SEA /mn Y TYPE= "notification", DESPLIEGA EL MODAL DE NOTIFICACIONES DE USUARIO
  EN EL CASO DE QUE EL FINAL DEL LINK SEA /ms Y TYPE= "settings", DESPLIEGA EL MODAL DE CONFIGURACIONES
  


  *****NOTA*****
  SE PUEDE CAMBIAR EL TYPE Y LA RUTA PARA QUE SIEMPRE SE USE LA MISMA RUTA EJ. /modal Y EL TYPE QUE SEA UN PROP DE LOCAL.STATE
  SOLO TENDRIA QUE CAMBIAR UNAS COSAS EN APP.JS Y LOS BOTONES CORRESPONDIENTES EN NAVBAR.JS EN SECCION DE SIDEBAR

  ESTE COMPONENTE HACE USO DEL CODIGO DE REDIMENCIONAMIENTO POR JAVASCRIPT
  ES NECESARIO UBICAR LOS ELEMENTOS POR EJES X/Y Y SI ES NECESARIO, TAMBIEN SU WIDTH Y HEIGHT
*/

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../UI/Button";
import Div from "../canvas2d/div";

import FormModal from "./formModal";
import SelecScene from "./selectScene";

import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { IoNotifications, IoSettingsSharp } from "react-icons/io5";
import { GoGraph } from "react-icons/go";

const IndexModal = ({ type }) => {
  let navigation = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //FUNCION QUE SE EJECUTA AL HACER VALIDACIONES
  const onSubmit = (e) => {
    console.log(e);
  };

  const [modalContent, setModalContent] = useState(0);
  const [searchParams, SetSearchParams] = useSearchParams();

  return (
    <div className="modal fade show d-block">
      <Div
        className="modal-content dark-bg-2 text-white border rounded-xl border-light z-10 poppins-medium"
        width={type == "normal" ? 1300 : 1600}
        height={type == "normal" ? 700 : 800}
        positionX={type == "normal" ? 310 : 160}
        positionY={type == "normal" ? 190 : 140}
      >
        <div className="modal-header">
          {type == "report" && (
            <div className="d-flex ms-3 fs-2">
              <GoGraph className="fs-1 my-auto me-3" />
              Reporte
            </div>
          )}
          {type == "notification" && (
            <div className="d-flex ms-3 fs-2">
              <IoNotifications className="fs-1 my-auto me-3" />
              Notificaciones
            </div>
          )}
          {type == "settings" && (
            <div className="d-flex ms-3 fs-2">
              <IoSettingsSharp className="fs-1 my-auto me-3" />
              Ajustes
            </div>
          )}

          {/* ESTA PARTE APARECE SOLO SI PROC TYPE ES NORMAL, SOLO PASA CUANDO RUTA ES /md */}
          {type == "normal" && (
            <div className="d-flex justify-content-between col-4 ms-3 poppins-bold fs-5">
              <div
                className={`cursor-pointer ${
                  modalContent == 0 ? "text-white" : "text-muted"
                }`}
                id="exampleModalLabel"
                onClick={() => setModalContent(0)}
              >
                Info
              </div>
              <div
                className={`cursor-pointer ${
                  modalContent == 1 ? "text-white" : "text-muted"
                }`}
                id="exampleModalLabel"
                onClick={() => setModalContent(1)}
              >
                Escenarios
              </div>
              <div
                className={`cursor-pointer ${
                  modalContent == 2 ? "text-white" : "text-muted"
                }`}
                id="exampleModalLabel"
                onClick={() => setModalContent(2)}
              >
                Personalizacion
              </div>
            </div>
          )}
          {/* Close */}
          <button
            type="button"
            className="btn-close btn-close-white"
            onClick={() => navigation(`..?${searchParams.toString()}`)}
          ></button>
        </div>

        {/* ESTA PARTE APARECE SOLO SI PROC TYPE ES NORMAL, SOLO PASA CUANDO RUTA ES /md */}
        {type == "normal" && modalContent == 0 ? (
          <FormModal
            onSubmit={onSubmit}
            handleSubmit={handleSubmit}
            register={register}
          />
        ) : (
          modalContent == 1 && <SelecScene />
        )}

        {type == "normal" && (
          <div className="modal-footer border-0 mb-3">
            <Button
              className="btn btn-light px-5"
              text="Guardar"
              onClick={() => navigation(`..?${searchParams.toString()}`)}
            />
          </div>
        )}
      </Div>
    </div>
  );
};
export default IndexModal;
