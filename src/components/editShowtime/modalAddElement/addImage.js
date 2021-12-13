import { MdDeleteForever } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import React, { useState } from "react";
import Div from "../../canvas2d/div";

const addImage = () => {
  const [img, setImg] = useState("");

  return (
    <>
      <div className="col-12 text-white text-center my-auto">
        <div className="fs-3">Agrega una imagen a tu banner</div>
        <div className="fs-6">
          Agrega las imágenes de tu marca para
          <br />
          personalizar tu espacio 3D.
        </div>
      </div>
      <Div
        className="col-11 border-inputFile mx-auto position-relative cursor-pointer my-4"
        height={200}
      >
        <input
          type="file"
          className="file_upload"
          accept="image/gif, image/jpeg, image/png"
          title=""
          onChange={(e) =>
            e.target.files.length &&
            setImg(URL.createObjectURL(e.target.files[0]))
          }
        />
        {img != "" ? (
          <div className="w-full h-full max-h-96 d-flex justify-content-center ">
            <img alt="" src={img} className="w-full rounded-xl" />
            <div
              className="rounded-circle btn-bgcard w-3 h-3 my-auto d-flex justify-content-center mx-2 cursor-pointer position-absolute end-0 mt-3"
              onClick={() => setImg("")}
            >
              <MdDeleteForever className="btn-card my-auto fs-5" />
            </div>
          </div>
        ) : (
          <div className="d-flex flex-column justify-content-between h-full my-4">
            <FiPlusCircle className="fs-1 mx-auto text-primary " />

            <div className="d-flex justify-content-center ">
              <span className="text-primary fs-6 ">
                Agrega o arrastra
                <span className="text-white"> una imagen Jpg o Png</span>
              </span>
            </div>
            <div className="text-secondary text-center fs-5 mb-5">
              Resolución: 1600x1200 px. Tamaño máximo: 5 mb
            </div>
          </div>
        )}
      </Div>
    </>
  );
};
export default addImage;
