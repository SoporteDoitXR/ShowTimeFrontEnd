import React, { useState } from "react";
import Input from "../UI/Input";
import showtime from "../../assets/UI/profile.png";

const formModal = ({ onSubmit, handleSubmit, register }) => {
  return (
    <div className="col-11 mx-auto row my-auto">
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
          className="row g-3 needs-validation"
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
          <Input
            id={"name_sts"}
            text={"Red social"}
            placeholder={"Link de red social"}
            type={"text"}
            register={register}
            errorMessage={"Campo obligatorio"}
            color="dark"
            required
          />
        </form>
      </div>
    </div>
  );
};
export default formModal;
