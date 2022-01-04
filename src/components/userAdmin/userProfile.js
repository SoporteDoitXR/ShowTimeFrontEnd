/*
  ESTE DOCUMENTO ES EL FORMULARIO DE EDICION DE PERFIL DE USUARIO.
  PERMITE AGREGAR SUS REDES SOCIALES, EMAIL, GESTION BASICA DE USUARIO Y FOTO DE PERFIL

  sE HACE CONTROL DE ERRORES A TRAVEZ DE REACT-HOOK-FORM
*/
import { useForm } from "react-hook-form";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import { useState } from "react";
import { MdAddAPhoto, MdDeleteForever } from "react-icons/md";

const userProfile = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    sceneController(1);
  };
  const [imgProfile, setImgProfile] = useState("");

  return (
    <>
      <div className="poppins-medium fs-3">Mis Showtimes</div>
      <form
        className="row g-4 needs-validation"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div class="col mt-5">
          {/* SELECTOR DE IMAGEN */}
          <div className="col-12 profile-inputFile mx-auto position-relative cursor-pointer h-15 rounded-pill mt-5">
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

        {/* formulario de perfil */}
        <div class="col-5 mt-5">
          <Input
            id={"username"}
            text={"Nombre de usuario"}
            placeholder={"Nombre de usuario"}
            type={"text"}
            register={register}
            errorMessage={"Campo obligatorio"}
            required
          />
          <Input
            id={"email"}
            text={"Correo electrónico"}
            placeholder={"info@empresa.com"}
            type={"text"}
            register={register}
            errorMessage={"Campo obligatorio"}
            required
          />
          <Input
            id={"pass"}
            text={"Contraseña"}
            type={"password"}
            register={register}
            errorMessage={"Campo obligatorio"}
            required
          />
          <Input
            id={"pass_repeate"}
            text={"Repita su contraseña"}
            type={"password"}
            register={register}
            errorMessage={"Campo obligatorio"}
            required
          />
        </div>
        <div class="col-5 mt-5">
          <Input
            id={"description_user"}
            text={"Descripción"}
            type={"textarea"}
            placeholder="Escribe tu descripción aqui"
            register={register}
            errorMessage={"Campo obligatorio"}
            required
          />
          <div className="d-flex gap-4">
            <Input
              id={"fb_user"}
              text={"Facebook"}
              placeholder={"Link de Facebook"}
              type={"text"}
              register={register}
              errorMessage={"Campo obligatorio"}
              required
            />
            <Input
              id={"tt_user"}
              text={"Twitter"}
              placeholder={"Link de Twitter"}
              type={"text"}
              register={register}
              errorMessage={"Campo obligatorio"}
              required
            />
          </div>
          <div className="d-flex gap-4">
            <Input
              id={"yt_user"}
              text={"Youtube"}
              placeholder={"Link de Youtube"}
              type={"text"}
              register={register}
              errorMessage={"Campo obligatorio"}
              required
            />
            <Input
              id={"li_user"}
              text={"LinkedIn"}
              placeholder={"Link de LinkedIn"}
              type={"text"}
              register={register}
              errorMessage={"Campo obligatorio"}
              required
            />
          </div>

          <div className="d-flex justify-content-center gap-5 mt-5">
            <Button
              type="submit"
              className="btn btn-dark px-5 poppins-bold"
              text="Volver"
            />
            <Button
              type="submit"
              className="btn btn-primary px-5 poppins-bold"
              text="Guardar"
            />
          </div>
        </div>
      </form>
    </>
  );
};
export default userProfile;
