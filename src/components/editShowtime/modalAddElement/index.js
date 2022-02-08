/*
  ESTE COMPONENTE QUE APARECE PAGINA DE EDICION DE PLANTILLA, UN MODAL
  SU FUNCION ES SER UN MODAL PARA AGREGAR UN ELEMENTO MULTIMEDIA EN LA PLANTILLA

  HACE USO DE ESTADOS/STATES PARA MOSTRAR UNO Y OTRO COMPONENTE:
  -ADDIMAGE, COMPONENTE PARA AGREGAR UNA IMAGEN
  -ADDURL,  COMPONENTE PARA AGREGAR UNA URL
  -ADDVIDEO, COMPONENTE PARA AGREGAR UN VIDEO
  -ADDHTML, COMPONENTE PARA AGREGAR UN HTML EMBED

  ESTE COMPONENTE HACE USO DEL CODIGO DE REDIMENCIONAMIENTO POR JAVASCRIPT
  ES NECESARIO UBICAR LOS ELEMENTOS POR EJES X/Y Y SI ES NECESARIO, TAMBIEN SU WIDTH Y HEIGHT
*/

import React, { useState } from "react";
import Button from "../../UI/Button";
import AddImage from "./addImage";
import AddURL from "./addURL";
import AddVideo from "./addVideo";
import AddHTML from "./addHTML";
import Div from "../../canvas2d/div";

const ModalAdd = ({ setShowModal }) => {
  const [modalContent, setModalContent] = useState(0);

  return (
    <div className="modal fade show d-block ">
      <Div
        className="modal-content text-white border rounded-xl border-light z-10 dark-bg-2 poppins-medium"
        width={800}
        height={550}
        positionX={560}
        positionY={265}
      >
        <div className="modal-header justify-content-center">
          <div className="d-flex justify-content-between col-11 poppins-bold fs-5">
            <div
              className={`cursor-pointer ${
                modalContent == 0 ? "text-white" : "text-muted"
              }`}
              id="exampleModalLabel"
              onClick={() => setModalContent(0)}
            >
              Imagen
            </div>
            <div
              className={`cursor-pointer ${
                modalContent == 1 ? "text-white" : "text-muted"
              }`}
              id="exampleModalLabel"
              onClick={() => setModalContent(1)}
            >
              Video
            </div>
            <div
              className={`cursor-pointer ${
                modalContent == 2 ? "text-white" : "text-muted"
              }`}
              id="exampleModalLabel"
              onClick={() => setModalContent(2)}
            >
              URL
            </div>
            <div
              className={`cursor-pointer ${
                modalContent == 3 ? "text-white" : "text-muted"
              }`}
              id="exampleModalLabel"
              onClick={() => setModalContent(3)}
            >
              Html Embed
            </div>
          </div>
        </div>
        {/* contenido */}
        {modalContent == 0 && <AddImage />}
        {modalContent == 1 && <AddVideo />}
        {modalContent == 2 && <AddURL />}
        {modalContent == 3 && <AddHTML />}

        {/* fin contenido */}
        <div className="modal-footer border-0 mb-2">
          <Button
            className="btn btn-dark px-5"
            text="Volver"
            onClick={() => setShowModal(false)}
          />
          <Button
            className="btn btn-light px-5"
            text="Guardar"
            onClick={() => setShowModal(false)}
          />
        </div>
      </Div>
    </div>
  );
};
export default ModalAdd;
