import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";

const CreateShowTime = ({ sceneController }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    sceneController(1);
  };
  return (
    <form
      className=" g-3 needs-validation"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="text-center fs-3 poppins-medium">Crea tu espacio</div>
      <div className="text-center fs-5 mt-3 poppins-medium">
        Añade la información que identificara tu espacio
      </div>

      <div className="col-md-6 mx-auto mt-5 ">
        <Input
          id={"name_sts"}
          text={"Nombre de showtime"}
          placeholder={"Nombre de showtime"}
          type={"text"}
          register={register}
          errorMessage={"Campo obligatorio"}
          required
        />
      </div>
      <div className="col-md-6 mx-auto ">
        <Input
          id={"description_st"}
          text={"Descripción"}
          type={"textarea"}
          placeholder="Escribe tu descripción aqui"
          register={register}
          errorMessage={"Campo obligatorio"}
          required
        />
      </div>

      <div className="d-flex justify-content-center gap-5 mt-5">
        <Button
          type="submit"
          className="btn btn-dark px-5 poppins-bold"
          text="Cancelar"
        />
        <Button
          type="submit"
          className="btn btn-primary px-5 poppins-bold"
          text="Siguiente"
        />
      </div>
    </form>
  );
};
export default CreateShowTime;
