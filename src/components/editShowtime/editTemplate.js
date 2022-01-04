import React, { useEffect, useState } from "react";
import Button from "../UI/Button";
import { MdDeleteForever } from "react-icons/md";
import ItemBanner from "../UI/ItemBanner";
/*
  ESTE COMPONENTE ES DE PAGINA DE EDICION DE PLANTILLAS
  SU FUNCION ES LA DE EDITAR LA PLANTILLA A USAR EN LA ESCENA
  ESTE COMPONENTE HACE USO DEL CODIGO DE REDIMENCIONAMIENTO POR JAVASCRIPT
  ES NECESARIO UBICAR LOS ELEMENTOS POR EJES X/Y Y SI ES NECESARIO, TAMBIEN SU WIDTH Y HEIGHT

  ----IMPORTANTE: TEMPORALMENTE NO HAY PLANTILLAS, ASI QUE, EL CONTROLADOR SOLO ES VISUAL

  -------NOTA IMPORTANTE------ 
  COMO NO EXISTEN PLANTILLAS DONDE HACER CLICK PARA DESPLEGAR MODAL DE AGREGAR ELEMENTOS,
  FUE INCORPORADO EN EVENTO ONCLICK() DEL TEXTO 'NO HAY CONTENIDO SELECCIONADO' DE LA SECCION DE BANNERS
*/

import { Outlet } from "react-router";
import ModalAdd from "./modalAddElement";
import { ChromePicker } from "react-color";
import Div from "../canvas2d/div";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const editTemplate = ({ setScene }) => {
  const [primaryColor, setPrimaryColor] = useState("#000000");
  const [showColoPrimary, setShowColoPrimary] = useState(false);
  const [secondaryColor, setSecondaryColor] = useState("#000000");
  const [showColorSecondary, setShowColorSecondary] = useState(false);
  const [imgLogo, setImgLogo] = useState("");
  const [showModa, setShowModal] = useState(false);
  const [control, setControl] = useState(true);
  const [height, setHeight] = useState(900);

  // CONTROL DE ANIMACION PARA OCULTAR O VER CONTROLADOR
  useEffect(() => {
    let interval = null;
    if (control && height != 900) {
      interval = setInterval(() => {
        setHeight((height) => height < 900 && height + 10);
      }, 1);
    } else if (control && height == 900) {
      clearInterval(interval);
    }

    if (!control) {
      interval = setInterval(() => {
        setHeight((height) => height > 80 && height - 10);
      }, 1);
    } else if (!control && height == 80) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [control, height]);

  return (
    <Div
      className="editPanel rounded-xl"
      height={height}
      width={400}
      positionY={120}
      positionX={1500}
    >
      <div className="row h-full g-3 p-3">
        <div className="text-white fs-3 col-12 poppins-bold d-flex justify-content-between user-select-none">
          Personalización
          {/* OCULTAR O VISUALIZAR EL PANEL DE CONTROL */}
          {!control && (
            <RiArrowDownSLine
              className="text-white fs-1 w-10 cursor-pointer"
              onClick={() => setControl(!control)}
            />
          )}
          {control && (
            <RiArrowUpSLine
              className="text-white fs-1 w-10 cursor-pointer"
              onClick={() => setControl(!control)}
            />
          )}
        </div>

        {/* SELECCIONADOR DE COLORES */}

        {/* NOTA: LOS COLORES SELECCIONADOS SON EL COLOR DE LOS MARCOS DE LOS COMPONENTES EN PLANTILLA
            TEMPORALMENTE NO ESTA ESTA FUNCION PORQUE NO HAY PLANTILLAS
         */}
        <div
          className={`col-12  text-white fs-5 poppins-bold user-select-none ${
            height == 900 ? "d-show" : "d-none"
          }`}
        >
          Colores
        </div>
        <div
          className={`col-6  text-white fs-5 poppins-medium ${
            height == 900 ? "d-show" : "d-none"
          }`}
        >
          <p className="fs-6">Primario</p>
          <div className="p-2 border border-light rounded-xl d-flex justify-content-between">
            <div
              className="color_picker h-5 w-5 border border-2 border-light my-auto"
              style={{ background: primaryColor }}
              onClick={() => setShowColoPrimary(!showColoPrimary)}
            />
            <p className="text-white my-auto mx-2 fs-6">{primaryColor}</p>
            {showColoPrimary ? (
              <div className="popup-color start-0">
                <div
                  className="cover"
                  onClick={() => setShowColoPrimary(false)}
                />
                <ChromePicker
                  color={primaryColor}
                  onChange={(color) => setPrimaryColor(color.hex)}
                />
              </div>
            ) : null}
          </div>
        </div>
        <div
          className={`col-6 text-white fs-5 poppins-medium fs-6 ${
            height == 900 ? "d-show" : "d-none"
          }`}
        >
          <p>Secundario</p>
          <div className="p-2 border border-light rounded-xl d-flex justify-content-between">
            <div
              className="color_picker h-5 w-5 border border-2 border-light my-auto"
              style={{ background: secondaryColor }}
              onClick={() => setShowColorSecondary(!showColorSecondary)}
            />

            <p className="text-white my-auto mx-2">{secondaryColor}</p>
            {showColorSecondary ? (
              <div className="popup-color end-0">
                <div
                  className="cover"
                  onClick={() => setShowColorSecondary(false)}
                />
                <ChromePicker
                  color={secondaryColor}
                  onChange={(color) => setSecondaryColor(color.hex)}
                />
              </div>
            ) : null}
          </div>
        </div>

        {/* SELECCIONADOR DE LOGO */}
        {/* DEBE MOSTRAR EL LOGO EN LA UBICACION EN ESPECIFICO DE LA PLANTILLA EN CUESTION, DEBE DESACTIVARSE DE SER NECESARIO */}
        <div
          className={`col-12 text-white d-flex justify-content-between fs-5 poppins-bold ${
            height == 900 ? "d-show" : "d-none"
          }`}
        >
          Logotipo
          {imgLogo != "" && (
            <div
              className="rounded-circle btn-bgcard w-3 h-3 my-auto d-flex justify-content-center mx-2 cursor-pointer"
              onClick={() => setImgLogo("")}
            >
              <MdDeleteForever className="btn-card my-auto fs-5" />
            </div>
          )}
        </div>
        <div
          className={`col-11 border-inputFile mx-auto position-relative cursor-pointer h-13 ${
            height == 900 ? "d-show" : "d-none"
          }`}
        >
          <input
            type="file"
            className="file_upload"
            accept="image/gif, image/jpeg, image/png"
            title=""
            onChange={(e) => setImgLogo(URL.createObjectURL(e.target.files[0]))}
          />
          {imgLogo != "" ? (
            <div className="h-full w-full d-flex justify-content-center">
              <img alt="" src={imgLogo} className="h-full" />
            </div>
          ) : (
            <div className="d-flex flex-column justify-content-between h-full poppins-medium">
              <div className="d-flex justify-content-center my-1">
                <span className="text-primary fs-6 mt-2">
                  Agrega
                  <span className="text-white"> una imagen Jpg o Png</span>
                </span>
              </div>
              <div className="text-secondary text-center mb-2 fs-6 ">
                Resolución: 1600x1200 px.
                <br />
                Tamaño máximo: 5 mb
              </div>
            </div>
          )}
        </div>

        {/* LISTADO DE ELEMENTOS CARGADOS EN PANTALLA */}
        {/* 
            -------NOTA IMPORTANTE------ 
            COMO NO EXISTEN PLANTILLAS DONDE HACER CLICK PARA DESPLEGAR MODAL DE AGREGAR ELEMENTOS,
            FUE INCORPORADO EN EVENTO ONCLICK() DEL TEXTO 'NO HAY CONTENIDO SELECCIONADO'
        */}
        <div
          className={`col-12 text-white fs-5 poppins-bold ${
            height == 900 ? "d-show" : "d-none"
          }`}
        >
          Banners
        </div>
        <div
          className={`col-12 h-20 custom-scroll ${
            height == 900 ? "d-show" : "d-none"
          }`}
        >
          <p
            className="text-gray fs-6 poppins-medium "
            onClick={() => setShowModal(true)}
          >
            No hay contenido seleccionados
          </p>
          <ItemBanner text={"1"} />
          <ItemBanner text={"2"} />
          <ItemBanner text={"3"} />
          <ItemBanner text={"4"} />
        </div>

        {/* Buttons */}
        <div
          className={`d-flex justify-content-center gap-5 mt-5 ${
            height == 900 ? "d-show" : "d-none"
          }`}
        >
          <Button
            className="btn btn-dark px-3 col-5 poppins-bold"
            text="Volver"
            onClick={() => setScene(0)}
          />
          <Button
            className="btn btn-light px-3 col-5 poppins-bold"
            text="Siguiente"
          />
        </div>
      </div>
      {showModa && <ModalAdd setShowModal={setShowModal} />}
      <Outlet />
    </Div>
  );
};

export default editTemplate;
