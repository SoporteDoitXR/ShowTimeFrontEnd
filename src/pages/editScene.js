import React, { useState } from "react";
import Scene from "../components/canvas2d/scene";
import EditTemplate from "../components/editShowtime/editTemplate";
import SelectTemplate from "../components/editShowtime/selectTemplate";
import plantilla1 from "../assets/plantillas/esc_plantilla-1.png";
import Div from "../components/canvas2d/div";

const editScenario = () => {
  const [imgBG, setImgBG] = useState(plantilla1);
  const [scenecontroller, setScene] = useState(0);
  return (
    <Scene
      className={"bg-black"}
      aspect="ratio16-9"
      bgColor="#000"
      bgImage={imgBG}
    >
      {scenecontroller == 0 && (
        <>
          {/* FONDO NEGRO DIFUMINADO */}
          <Div
            className="overlay"
            width={1920}
            positionY={0}
            positionX={0}
          ></Div>

          {/* SELECCION DE PLANTILLA */}
          <SelectTemplate
            imgBG={imgBG}
            setImgBG={setImgBG}
            setScene={setScene}
          />
        </>
      )}

      {/* EDICION DE PLANTILLA */}
      {scenecontroller == 1 && <EditTemplate setScene={setScene} />}
    </Scene>
  );
};
export default editScenario;
