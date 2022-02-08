import React, { useState } from "react";
import EditTemplate from "../components/editShowtime/editTemplate2d";
import SelectTemplate from "../components/editShowtime/selectTemplate2d";

const editScenario = () => {
  const [imgBG, setImgBG] = useState("");
  const [scenecontroller, setScene] = useState(0);
  return (
    <>
      <div className="container-fluid p-none">
        {scenecontroller == 0 && <div className="overlay"></div>}
        <img
          src={imgBG}
          alt=""
          className="position-absolute w-full h-full z--2 top-0"
        />
      </div>

      {scenecontroller == 0 && (
        <SelectTemplate imgBG={imgBG} setImgBG={setImgBG} setScene={setScene} />
      )}
      {scenecontroller == 1 && <EditTemplate setScene={setScene} />}
    </>
  );
};
export default editScenario;
