/*
  COMPONENTE REUTILIZABLE DE CARDSCENE.
  MUESTRA LA IMAGEN DE LA ESCENA, EL NOMBRE Y DOS BOTONES QUE APARECEN EN HOVER PARA EDITAR Y ELIMINAR
  LOS PROPS SON:
  -TEXTSCENE: NOMBRE DE LA ESCENA
  -SCENEIMG, IMAGEN DE LA ESCENA (NO HAY IMAGEN POR DEFECTO EN CASO DE QUE NO TRAIGA LA IMAGEN)
  -CARDMODE, UN PROPS QUE SI ES IGUAL A "showScene" MUESTRA CIERTOS COMPONENTES COMO LOS BOTONES DE EDITAR Y BORRAR
  -ONCLICK, EVENTO ONCLICK POR PROP
  -SELECTED, PROPS DE TRUE/FALSE PARA CAMBIAR EL FONDO DE CARD SELECCIONADO
*/

import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { FaEdit, FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const CardScene = ({ standSlug, textScene, sceneIMG, cardMode, onClick, selected, userMode }) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="col-3 cursor-pointer mx-5 my-4">
      <Link to={`/stand/${standSlug}`} style={{ textDecoration: 'none' }}>
        <div
          className={`card rounded-2xl m-none p-none shadow " ${
            onClick && " cursor-pointer "
          } " " ${selected ? " bg-primary " : " bg-dark "}`}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          onClick={onClick && onClick}
        >
          {cardMode && cardMode.includes("add") ? (
            <>
              <div className="card-img-top h-15 card-sceneIMG primary-bg fs-3 m-auto d-flex justify-content-center">
                <BsPlusCircle className="fs-1 my-auto cursor-pointer h-50 w-full" />
              </div>
              <div className="card-body d-flex text-white justify-content-center">
                <h5 className="card-title poppins-medium">
                  {cardMode == "addCategory"
                    ? "Añadir otra categoria"
                    : "Añadir otra escena"}
                </h5>
              </div>
            </>
          ) : (
            <>
              <img
                src={sceneIMG}
                className="card-img-top h-15 card-sceneIMG"
                alt="..."
              />
              <div
                className={`card-body d-flex  text-white " ${
                  cardMode == "showScene"
                    ? " justify-content-between "
                    : " justify-content-center "
                }`}
              >
                <h5 className="card-title poppins-medium">
                  {selected && <FaCheckCircle className="me-2" />}
                  {textScene}
                </h5>

                {cardMode == "showScene" && !userMode && (
                  <div
                    className={`col-2 d-flex justify-content-between " ${
                      hover ? " btn-show " : " btn-hidden "
                    }`}
                  >
                    <div className="rounded-circle btn-bgcard w-3 h-3 my-auto d-flex justify-content-center mx cursor-pointer">
                      <FaEdit className="btn-card my-auto fs-7" />
                    </div>
                    <div className="rounded-circle btn-bgcard w-3 h-3 my-auto d-flex justify-content-center mx cursor-pointer">
                      <MdDeleteForever className="btn-card my-auto fs-5" />
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </Link>
    </div>
  );
};

export default CardScene;
