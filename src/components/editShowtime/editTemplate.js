import React, { useEffect, useState } from "react";
import Button from "../UI/Button";
import { MdDeleteForever } from "react-icons/md";
import ItemBanner from "../UI/ItemBanner";
import { Outlet } from "react-router";

const editTemplate = ({ setScene }) => {
  const [primaryColor, setPrimaryColor] = useState("#000000");
  const [secondaryColor, setSecondaryColor] = useState("#000000");
  const [imgLogo, setImgLogo] = useState("");
  return (
    <div className="position-absolute editPanel rounded-xl">
      <div className="row h-full g-3 p-3">
        <div className="text-white fs-3  col-12">Personalización</div>

        {/* color picker */}
        <div className="col-12  text-white">Colores</div>
        <div className="col-6  text-white">
          <p>Primario</p>
          <div className="p-2 border border-light rounded-xl d-flex justify-content-between">
            <input
              type="color"
              className="color_picker h-4 w-4 "
              defaultValue={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
            />
            <p className="text-white my-auto mx-2">{primaryColor}</p>
          </div>
        </div>
        <div className="col-6 text-white ">
          <p>Secundario</p>
          <div className="p-2 border border-light rounded-xl d-flex justify-content-between">
            <input
              type="color"
              className="color_picker h-4 w-4 "
              defaultValue={secondaryColor}
              onChange={(e) => setSecondaryColor(e.target.value)}
            />
            <p className="text-white my-auto mx-2">{secondaryColor}</p>
          </div>
        </div>

        {/* Logo picker */}
        <div className="col-12 text-white d-flex justify-content-between">
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
        <div className="col-11 border-inputFile mx-auto position-relative cursor-pointer">
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
            <div className="d-flex flex-column justify-content-between h-full">
              <div className="d-flex justify-content-center my-1">
                <span className="text-primary fs-6 ">
                  Agrega
                  <span className="text-white"> una imagen Jpg o Png</span>
                </span>
              </div>
              <div className="text-secondary text-center my-1">
                Resolución: 1600x1200 px.
                <br />
                Tamaño máximo: 5 mb
              </div>
            </div>
          )}
        </div>

        {/* BANNERS PICKER */}
        <div className="col-12 text-white ">Banners</div>
        <div className="col-12 h-20 custom-scroll">
          <p className="text-white fs-6">No hay contenido seleccionados</p>
          <ItemBanner text={"1"} />
          <ItemBanner text={"2"} />
          <ItemBanner text={"3"} />
          <ItemBanner text={"4"} />
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-center gap-5 mt-5">
          <Button
            className="btn btn-dark px-3 col-5"
            text="Volver"
            onClick={() => setScene(0)}
          />
          <Button className="btn btn-light px-3 col-5" text="Siguiente" />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default editTemplate;
