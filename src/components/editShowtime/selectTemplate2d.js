import React, { useEffect } from "react";

import plantilla1 from "../../assets/plantillas/esc_plantilla-1.png";
import plantilla2 from "../../assets/plantillas/esc_plantilla-2.png";
import plantilla3 from "../../assets/plantillas/esc_plantilla-3.png";
import Button from "../UI/Button";
import CardScene from "../UI/CardScene";
import { Outlet, useNavigate } from "react-router";

const selectTemplate = ({ imgBG, setImgBG, setScene }) => {
  let navigation = useNavigate();
  useEffect(() => {
    setImgBG(plantilla1);
  }, []);

  return (
    <div className="container mt-5">
      <div className="g-3 text-white">
        <div className="text-center fs-3">Elige un escenario</div>
        <div className="text-center fs-4=5 mt-3">
          Puedes comenzar creando un espacio para tu empresa
          <br /> con alguna de nuestras plantillas
        </div>

        <div class="row  g-4 mt-15">
          <CardScene
            textScene={"Fachada 01"}
            sceneIMG={plantilla1}
            onClick={() => setImgBG(plantilla1)}
            selected={imgBG == plantilla1 && true}
          />
          <CardScene
            textScene={"Fachada 02"}
            sceneIMG={plantilla2}
            onClick={() => setImgBG(plantilla2)}
            selected={imgBG == plantilla2 && true}
          />
          <CardScene
            textScene={"Fachada 03"}
            sceneIMG={plantilla3}
            onClick={() => setImgBG(plantilla3)}
            selected={imgBG == plantilla3 && true}
          />
        </div>

        <div className="d-flex justify-content-center gap-5 mt-5">
          <Button
            className="btn btn-dark px-5"
            text="Volver"
            onClick={() => navigation("modal")}
          />
          <Button
            className="btn btn-light px-5"
            text="Siguiente"
            onClick={() => setScene(1)}
          />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default selectTemplate;
