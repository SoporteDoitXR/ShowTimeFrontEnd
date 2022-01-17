/*
  ESTE DOCUMENTO ES UNA PAGINA PRINCIPAL DE LOGIN, HACE USO DE REACT-HOOK-FORM PARA EL FORMULARIO Y CONTROL DE ERRORES
*/

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import { MdAlternateEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {
  deleteUser,
  editUser,
  getAllUsers,
  getUser,
  postUser,
} from "../providers/apiTest";
import {
  getIdUser,
  logCookies,
  saveCookieUser,
} from "../providers/cookie-user";

const login = () => {
  let navigation = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // FUNCION QUE SE EJECUTA SI NO HAY ERRORES
  const onSubmit = async (data) => {
    // getAllUsers()
    //   .then((data) => data.json())
    //   .then((data) => console.log(data));
    getUser(data.email)
      .then((data) => data.json())
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        if (response.length > 0) {
          console.log(response);
          saveCookieUser(response[0].id, response[0].name, response[0].email);
          alert("Bienvenido " + response[0].name);
          navigation("/admin");
        } else {
          alert("El usuario no existe");
        }
      });
    // editUser(2197, {
    //   name: "test cambio",
    //   gender: "Male",
    //   email: data.email,
    //   status: "Active",
    // })
    //   .then((data) => data.json())
    //   .then((data) => console.log(data));
    // id 3029
    // postUser({
    //   name: "test user",
    //   gender: "Male",
    //   email: data.email,
    //   status: "Active",
    // })
    //   .then((data) => data.json())
    //   .then((data) => console.log(data));
    // console.log(data.email);
    // deleteUser(3029).then((data) => console.log(data));
  };

  useEffect(() => {
    getIdUser() && navigation("/admin");
  }, []);

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
