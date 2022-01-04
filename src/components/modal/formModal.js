/*
  ESTE COMPONENTE ES DE MODAL GLOBAL, SECCION FORMULARIO DE EVENTO
  SU FUNCION ES MOSTRAR UN FORMULARIO DE CONTACTO E INFORMACION BASICA DEL EVENTO

  USO DE REACT-HOOK-FORM PARA VALIDACION DE FORMULARIO
*/

import React, { useState } from "react";
import Input from "../UI/Input";
import showtime from "../../assets/UI/profile.png";

const formModal = ({ onSubmit, handleSubmit, register }) => {
  return (
    <div className="col-11 mx-auto row my-auto overflow-hidden h-70">
      <div className="col-6 pe-5">
        <img className="col-3 mt-5" alt="" src={showtime} />
        <div className="fs-3">Feria anual 2022</div>
        <div className="fs-6 mt-3">
          Una feria es un evento industrial, social, económico y cultural
          —establecido, temporal o ambulante, periódico o anual— que se lleva a
          cabo en una sede y que llega a abarcar generalmente un tema o
          propósito común.
        </div>
      </div>
      <div className="col-6 ps-5">
        <form
          className="row g-3 needs-validation h-85 custom-scroll"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <Input
            id={"name_sts"}
            text={"Sitio web"}
            placeholder={"Nombre de sitio web"}
            type={"text"}
            register={register}
            errorMessage={"Campo obligatorio"}
            color="dark"
            required
          />
          <Input
            id={"name_sts"}
            text={"Numero de telefono"}
            placeholder={"Numero de telefono"}
            type={"text"}
            register={register}
            errorMessage={"Campo obligatorio"}
            color="dark"
            required
          />
          <Input
            id={"name_sts"}
            text={"Email de contacto"}
            placeholder={"Email de contacto"}
            type={"text"}
            register={register}
            errorMessage={"Campo obligatorio"}
            color="dark"
            required
          />
          <div className="fs-6">Redes sociales</div>
          <div className="d-flex gap-3">
            <Input
              id={"fb_sts"}
              text={"Facebook"}
              placeholder={"Link de Facebook"}
              type={"text"}
              register={register}
              errorMessage={"Campo obligatorio"}
              color="dark"
            />
            <Input
              id={"tt_sts"}
              text={"Twitter"}
              placeholder={"Link de Twitter"}
              type={"text"}
              register={register}
              errorMessage={"Campo obligatorio"}
              color="dark"
            />
          </div>
          <div className="d-flex gap-3 ">
            <Input
              id={"yt_sts"}
              text={"Youtube"}
              placeholder={"Link de Youtube"}
              type={"text"}
              register={register}
              errorMessage={"Campo obligatorio"}
              color="dark"
            />
            <Input
              id={"li_sts"}
              text={"LinkedIn"}
              placeholder={"Link de LinkedIn"}
              type={"text"}
              register={register}
              errorMessage={"Campo obligatorio"}
              color="dark"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default formModal;
