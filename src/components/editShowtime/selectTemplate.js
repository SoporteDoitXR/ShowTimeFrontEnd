import React, { useEffect } from "react";

import plantilla1 from "../../assets/plantillas/esc_plantilla-1.png";
import plantilla2 from "../../assets/plantillas/esc_plantilla-2.png";
import plantilla3 from "../../assets/plantillas/esc_plantilla-3.png";
import Text from "../canvas2d/text";
import CardScene from "../canvas2d/cardScene";
import Button from "../canvas2d/button";
import { Outlet, useNavigate } from "react-router";

const selectTemplate = ({ imgBG, setImgBG, setScene }) => {
  let navigation = useNavigate();
  useEffect(() => {
    setImgBG(plantilla1);
  }, []);

  return (
    <>
      <Text
        className="text-white fs-3 text-center poppins-medium"
        width={500}
        positionX={700}
        positionY={100}
      >
        Elige un escenario
        <div className="fs-6 mt-3">
          Puedes comenzar creando un espacio para tu empresa
          <br /> con alguna de nuestras plantillas
        </div>
      </Text>
      <CardScene
        x={350}
        y={650}
        textScene={"Fachada 01"}
        sceneIMG={plantilla1}
        onClick={() => setImgBG(plantilla1)}
        selected={imgBG == plantilla1 && true}
      />
      <CardScene
        x={785}
        y={650}
        textScene={"Fachada 02"}
        sceneIMG={plantilla2}
        onClick={() => setImgBG(plantilla2)}
        selected={imgBG == plantilla2 && true}
      />
      <CardScene
        x={1220}
        y={650}
        textScene={"Fachada 03"}
        sceneIMG={plantilla3}
        onClick={() => setImgBG(plantilla3)}
        selected={imgBG == plantilla3 && true}
      />
      <Button
        classNameBtn="rounded-pill py-2 z-2 btn-dark poppins-bold"
        classNameText="px-5 text-white"
        color="rgb(33, 37, 41)"
        bgColor="#212529"
        positionX="650"
        positionY="920"
        fontSize="20"
        onClick={() => navigation("/")}
      >
        Volver
      </Button>
      <Button
        classNameBtn="rounded-pill py-2 z-2 btn-light poppins-bold"
        classNameText="px-5 text-black"
        color="rgb(255 255 255)"
        bgColor="#ffffff"
        positionX="1080"
        positionY="920"
        fontSize="20"
        onClick={() => setScene(1)}
      >
        Siguiente
      </Button>

      <Outlet />
    </>
  );
};

export default selectTemplate;
