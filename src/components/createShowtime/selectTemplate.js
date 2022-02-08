/*
  ESTE COMPONENTE ES DE CREACION DE SHOWTIME O EVENTO.
  SU FUNCION ES MOSTRAR LAS PLANTILLAS QUE HAY PARA QUE USUARIO ELIJA CUALES USAR

  SE TRABAJA COMO FORMULARIO CON REACT-HOOK-FORM PARA FACILITAR SABER CUAL SE SELECCIONO Y CUAL NO
*/

import React from "react";
import Button from "../../components/UI/Button";
import { useForm } from "react-hook-form";
import CardTemplate from "../../components/UI/CardTemplate";
import profileIMG from "../../assets/UI/profile.png";

const SelectTemplate = ({ sceneController }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //FUNCION QUE SE EJECUTA AL FINALIZAR VALIDACION
  const onSubmit = () => {
    sceneController(2);
  };
  return (
    <form
      className="mt-6 needs-validation text-white"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="col-12 text-center">
        <div className="fs-3 poppins-medium">Selecciona tus escenarios</div>
        <div className=" poppins-medium">
          Puedes comenzar creando un espacio para tu empresa
        </div>
      </div>

      <div className="row g-4 mt-6">
        <CardTemplate
          id={"fachada"}
          title={"Fachada exterior"}
          description={"Entrada principal externa del evento."}
          img={profileIMG}
          checked={true}
          register={register}
        />
        <CardTemplate
          id={"recepcion"}
          title={"Recepcion"}
          description={"Sala para registro y consultas."}
          img={profileIMG}
          checked={true}
          register={register}
        />

        <CardTemplate
          id={"pabellon"}
          title={"Pabellon"}
          description={"En el se encuentran los stand de cada exponente."}
          img={profileIMG}
          checked={true}
          register={register}
        />

        <CardTemplate
          id={"conferencias"}
          title={"Sala de conferencias"}
          description={"Sala donde se daran las video conferencias."}
          img={profileIMG}
          checked={true}
          register={register}
        />
        <CardTemplate
          id={"nerworking"}
          title={"Sala de networking"}
          description={"Espacio para charlar y conectar con los usuarios."}
          img={profileIMG}
          checked={true}
          register={register}
        />
        <CardTemplate
          id={"privada"}
          title={"Sala privada"}
          description={"Salon que permite tener llamadas en grupos privados."}
          img={profileIMG}
          checked={true}
          register={register}
        />
      </div>

      <div className="d-flex justify-content-center gap-5 mt-8">
        <Button
          className="btn btn-dark px-5 poppins-bold"
          text="Cancelar"
          onClick={() => sceneController(0)}
        />
        <Button
          type="submit"
          className="btn btn-light px-5 poppins-bold"
          text="Siguiente"
        />
      </div>
    </form>
  );
};
export default SelectTemplate;
