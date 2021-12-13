import React, { useState } from "react";
import CreateShowTime from "../components/createShowtime/createShowTime";
import SelectScene from "../components/createShowtime/selectScene";
import SelectTemplate from "../components/createShowtime/selectTemplate";

const CreateSpace = () => {
  const [sceneCreator, setSceneCreator] = useState(0);

  return (
    <>
      <div className="container-fluid border-bottom border-dark boder-3">
        <div className="d-flex justify-content-center poppins-bold fs-7">
          <div
            className={`mx-5  " ${
              sceneCreator == 0
                ? "py-2 px-4 my-1 bg-info rounded-pill"
                : "my-auto"
            }`}
          >
            1. Info
          </div>
          <div
            className={`mx-5  " ${
              sceneCreator >= 1
                ? "py-2 px-4 my-1 bg-info rounded-pill"
                : "my-auto"
            }`}
          >
            2. Escenarios
          </div>
        </div>
      </div>
      <div className="container mt-5">
        {sceneCreator == 0 && (
          <CreateShowTime sceneController={setSceneCreator} />
        )}
        {sceneCreator == 1 && (
          <SelectTemplate sceneController={setSceneCreator} />
        )}
        {sceneCreator == 2 && <SelectScene sceneController={setSceneCreator} />}
      </div>
    </>
  );
};
export default CreateSpace;
