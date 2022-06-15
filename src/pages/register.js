import React, { useState } from "react";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import { useForm } from "react-hook-form";
import logoShowTime from "../assets/UI/Logo_showtime.png";
import Cookies from "universal-cookie";
import { saveCookieUser } from "../providers/cookie-user";
import { apiRegister } from "../providers/apiRegister";

const Register = ({ onRegister }) => {
  const cookies = new Cookies();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    let midnight = new Date();
    midnight.setHours(23,59,59,0);
    apiRegister(data.name, data.lastname, data.email, data.tel)
      .then((data) => data.json())
      .then((response) => {
        if (response) {
          saveCookieUser(data.name, data.lastname);
          cookies.set('cookieExpires', true, {
              path: '/',
              expires: midnight,
          });
          onRegister();
          //alert("Bienvenido ");
        } else {
          alert("no agregado");
        }
      });
    
  };

  return (
    <>
      <div className="container bg-dark text-white col-6 p-5 rounded-xl">
        <div className="col-2">
          <img className="w-full" src={logoShowTime} alt="" />
        </div>
        <form
          className=" d-flex flex-column g-4 col-8 mx-auto "
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="text-center fs-3 poppins-medium ">Registrarse</div>
          <div className="d-flex gap-4 my-4">
            <Input
              size="large"
              id={"name"}
              text={"Nombre *"}
              placeholder={"Ej: Juan"}
              type={"text"}
              register={register}
              errorMessage={"Campo obligatorio"}
              color="dark"
              required
            />
            <Input
              size="large"
              id={"lastname"}
              text={"Apellido *"}
              placeholder={"Ej: Perez"}
              type={"text"}
              register={register}
              errorMessage={"Campo obligatorio"}
              color="dark"
              required
            />
          </div>
          <div className="d-flex gap-4 my-1">
            <Input
              size="large"
              id={"tel"}
              text={"Teléfono *"}
              placeholder={"Ej: 87586321"}
              type={"text"}
              register={register}
              errorMessage={"Campo obligatorio"}
              color="dark"
              required
            />
            <Input
              size="large"
              id={"email"}
              text={"Correo electrónico"}
              placeholder={"Ej. usuario@text.com"}
              type={"email"}
              register={register}
              errorMessage={"Campo obligatorio"}
              color="dark"
              required
            />
          </div>
          <div className="col-10 mx-auto mt-5 pb-5">
            <Button
              type="submit"
              className="primary-bg border-0 w-full px-5 py-3 poppins-bold text-white"
              text="Confirmar"
            />
          </div>
        </form>
      </div>
    </>
  );
};
export default Register;
