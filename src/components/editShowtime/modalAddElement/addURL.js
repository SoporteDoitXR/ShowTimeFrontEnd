import React, { useState } from "react";
import Input from "../../UI/Input";

const addURL = () => {
  return (
    <>
      <div className="col-12 text-white text-center my-auto">
        <div className="fs-3">Agrega un URL</div>

        <div className="col-6 mx-auto ">
          <Input
            id={"url"}
            text={"Agrega el url que desees"}
            placeholder={"Agregar URL"}
            type={"text"}
            color="dark"
          />
        </div>
      </div>
    </>
  );
};
export default addURL;
