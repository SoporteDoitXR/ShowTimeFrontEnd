/*
  ESTE COMPONENTE ES DE MODAL DE NETWORKING
  SU FUNCION ES MOSTRAR UN FORMULARIO PARA CREAR USUARIOS Y EMPRESAS

  USO DE REACT-HOOK-FORM PARA VALIDACION DE FORMULARIO

  --NOTA-- SE PUEDE REUTILIZAR O CREAR NUEVO COMPONENTE A PARTIR DE ESTE PARA EL CASO DE CREAR EMPRESAS
  YA QUE, AUN NO ESTA DEFINIDA LA INFORMACION DE LAS EMPRESAS
*/
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdAddAPhoto, MdDeleteForever } from "react-icons/md";
import CheckBox from "../UI/Checkbox";
import Input from "../UI/Input";
import Select from "../UI/Select";

const AddUser = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //FUNCION QUE SE EJECUTA LUEGO DE VALIDAR
  const onSubmit = (e) => {
    console.log(e);
  };
  const [imgProfile, setImgProfile] = useState("");

  return (
    <form
      className=" d-flex flex-column g-4 col-10 mx-auto "
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div class="col mx-auto">
        <div className="profile-inputFile mx-auto position-relative cursor-pointer h-14 w-14 rounded-pill">
          <input
            type="file"
            className="file_upload"
            accept="image/gif, image/jpeg, image/png"
            title=""
            onChange={(e) =>
              e.target.files.length &&
              setImgProfile(URL.createObjectURL(e.target.files[0]))
            }
          />
          {imgProfile != "" ? (
            <div className="h-full w-full d-flex justify-content-center">
              <img alt="" src={imgProfile} className="w-full rounded-pill" />
              <div
                className="rounded-circle btn-bgcard w-3 h-3 my-auto d-flex justify-content-center mx-2 cursor-pointer position-absolute "
                onClick={() => setImgProfile("")}
              >
                <MdDeleteForever className="btn-card my-auto fs-5" />
              </div>
            </div>
          ) : (
            <div className="d-flex flex-column justify-content-center h-full poppins-medium text-primary">
              <div className="d-flex justify-content-center mb-2">
                <MdAddAPhoto className="fs-1" />
              </div>
              <div className="text-center  fs-6 ">
                Agregar
                <br />
                imagen
              </div>
            </div>
          )}
        </div>
      </div>
      <Input
        id={"name_user"}
        text={"Nombre de usuario"}
        placeholder={"Ej. usuario123"}
        type={"text"}
        register={register}
        errorMessage={"Campo obligatorio"}
        color="dark"
        required
      />
      <Input
        id={"pass_user"}
        text={"Contraseña"}
        placeholder={"Ej. 123456"}
        type={"password"}
        register={register}
        errorMessage={"Campo obligatorio"}
        color="dark"
        required
      />
      <Input
        id={"email_user"}
        text={"Correo electrónico"}
        placeholder={"Ej. usuario@text.com"}
        type={"email"}
        register={register}
        errorMessage={"Campo obligatorio"}
        color="dark"
        required
      />
      <div className="d-flex gap-4">
        <Input
          id={"name_profile"}
          text={"Nombre"}
          placeholder={"Ej: Juan"}
          type={"text"}
          register={register}
          errorMessage={"Campo obligatorio"}
          color="dark"
          required
        />
        <Input
          id={"lastname_profile"}
          text={"Apellido"}
          placeholder={"Ej: Perez"}
          type={"text"}
          register={register}
          errorMessage={"Campo obligatorio"}
          color="dark"
          required
        />
      </div>

      <Select
        id={"rol_user"}
        text={"Tipo de usuario"}
        options={[
          "Administrador",
          "Expositor",
          "Visitante",
          "Asistente",
          "Conferencista",
        ]}
        color="dark"
        placeholder={
          "Administrador / Expositor / Visitante / Asistente / Conferencista"
        }
        register={register}
        errorMessage={"Campo obligatorio"}
        required
      />
      <CheckBox
        id={"active_user"}
        text={"Activar usuario"}
        defaultChecked={false}
        register={register}
        errorMessage={"Campo obligatorio"}
      />
    </form>
  );
};
export default AddUser;
