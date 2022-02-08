/*
  ESTE COMPONENTE ES DE PAGINA DE PABELLONES, CATEGORIAS Y STANDS
  SU FUNCION ES CREAR CATEGORIAS
  HACE USO DE REACT-HOOK-FORM POR PROPS PARA LA VALIDACION

  ESTE COMPONENTE HACE USO DEL CODIGO DE REDIMENCIONAMIENTO POR JAVASCRIPT
  ES NECESARIO UBICAR LOS ELEMENTOS POR EJES X/Y Y SI ES NECESARIO, TAMBIEN SU WIDTH Y HEIGHT

  ----IMPORTANTE: TEMPORALMENTE ES SOLO ESTETICO, NO CAMBIA DE CATEGORIA
*/

import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";

import Div from "../canvas2d/div";
import Input from "../UI/Input";
import Button from "../UI/Button";

const CreateCategory = ({
  handleSubmit,
  onSubmit,
  register,
  errors,
  img,
  setImg,
  setPavilionControl,
}) => {
  return (
    <form
      className="row justify-content-evenly g-4 m-0 h-full"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="col-5">
        <Input
          id={"category_name"}
          text={"Nombre de categoria"}
          placeholder={"Escribe tu nombre de categoria aqui"}
          type={"text"}
          register={register}
          errorMessage={"Campo obligatorio"}
          color="dark"
          required
        />
        <Input
          id={"category_description"}
          text={"Descripción"}
          placeholder={"Escribe tu descripción aqui"}
          type={"textarea"}
          register={register}
          errorMessage={"Campo obligatorio"}
          color="dark"
          required
        />
      </div>
      <div className="col-5">
        <div className="poppins-medium fs-6 ms-4">Imagen de categoria</div>
        <div className="col-11 border-inputFile mx-auto position-relative cursor-pointer my-4 h-50">
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
              <img alt="" src={img} className="h-full rounded-xl" />
              <div
                className="rounded-circle btn-bgcard w-3 h-3 my-auto d-flex justify-content-center mx-2 cursor-pointer position-absolute end-0 mt-3"
                onClick={() => setImg("")}
              >
                <MdDeleteForever className="btn-card my-auto fs-5" />
              </div>
            </div>
          ) : (
            <div className="d-flex flex-column justify-content-between h-full my-4">
              <FiPlusCircle className="fs-xl mx-auto text-primary " />

              <div className="d-flex justify-content-center ">
                <span className="text-primary fs-5 ">
                  Agrega o arrastra
                  <span className="text-white"> una imagen Jpg o Png</span>
                </span>
              </div>
              <div className="text-secondary text-center fs-5 mb-5">
                Resolución: 1600x1200 px.
                <br />
                Tamaño máximo: 5 mb
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Buttons */}
      <Div
        className=" text-white custom-scroll"
        width={500}
        height={100}
        positionY={470}
        positionX={500}
      >
        <div className="d-flex justify-content-center gap-5 ">
          <Button
            className="btn btn-dark px-3 col fs-5 poppins-bold"
            text="Cancelar"
            onClick={() => setPavilionControl(0)}
          />
          <Button
            className="btn btn-light px-3 col fs-5 poppins-bold"
            text="Crear"
            type="submit"
          />
        </div>
      </Div>
    </form>
  );
};
export default CreateCategory;
