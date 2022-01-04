/*
  ESTE DOCUMENTO ES UNA PAGINA PRINCIPAL DE LOGIN, HACE USO DE REACT-HOOK-FORM PARA EL FORMULARIO Y CONTROL DE ERRORES
*/

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import { MdAlternateEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // FUNCION QUE SE EJECUTA SI NO HAY ERRORES
  const onSubmit = () => {
    console.log("nice");
  };
  return (
    <div className="container mt-5">
      <form
        className="mt-6 needs-validation"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="text-center fs-3 poppins-medium">Inicie sesión</div>
        <div className="col-md-5 mx-auto mt-5 ">
          <Input
            id={"email"}
            text={"Nombre de usuario"}
            placeholder={"Nombre de usuario"}
            type={"email"}
            iconLeft={MdAlternateEmail}
            register={register}
            errorMessage={"Campo obligatorio"}
            required
          />
        </div>
        <div className="col-md-5 mx-auto ">
          <Input
            id={"password"}
            text={"Contraseña"}
            type={"password"}
            iconLeft={FaLock}
            placeholder="Contraseña"
            register={register}
            errorMessage={"Campo obligatorio"}
            required
          />
        </div>
        <div className="col-md-5 mx-auto my-3 d-flex justify-content-end">
          <Link className="text-gray text-decoration-none d-flex-end" to=".">
            Olvide mi contraseña
          </Link>
        </div>

        <div className="col-md-5 mx-auto mt-5">
          <Button
            type="submit"
            className="btn btn-primary w-full px-5 poppins-bold"
            text="Iniciar sesión"
          />
        </div>
      </form>
    </div>
  );
};
export default login;
