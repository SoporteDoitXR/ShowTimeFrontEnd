/*
  ESTE COMPONENTE ES DE MODAL DE MEETING
  SU FUNCION ES MOSTRAR UN FORMULARIO PARA CREAR MEETING

  USO DE REACT-HOOK-FORM PARA VALIDACION DE FORMULARIO
*/

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../UI/Input";
import Select from "../UI/Select";

const AddMeeting = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    console.log(e);
  };
  return (
    <form
      className=" d-flex flex-column justify-content-between col-10 mx-auto h-80 pb-3"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <Input
        id={"name_meeting"}
        text={"Nombre de conferencia"}
        placeholder={"Nombre"}
        type={"text"}
        register={register}
        errorMessage={"Campo obligatorio"}
        color="dark"
        required
      />
      <Input
        id={"descrip_meeting"}
        text={"Descripción"}
        placeholder={"Escribe..."}
        type={"text"}
        register={register}
        errorMessage={"Campo obligatorio"}
        color="dark"
        required
      />
      <div className="d-flex gap-4">
        <div className="col-8 d-flex gap-3">
          <Select
            id={"admin_meeting"}
            text={"Fecha"}
            options={[
              "01",
              "02",
              "03",
              "04",
              "05",
              "06",
              "07",
              "08",
              "09",
              "10",
              "11",
              "12",
              "13",
              "14",
              "15",
              "16",
              "17",
              "18",
              "19",
              "20",
              "21",
              "22",
              "23",
              "24",
              "25",
              "26",
              "27",
              "28",
              "29",
              "30",
              "31",
            ]}
            color="dark"
            className={"col"}
            placeholder={"Dia"}
            register={register}
            errorMessage={"Campo obligatorio"}
            required
          />
          <Select
            id={"admin_meeting"}
            options={[
              "Enero",
              "Febrero",
              "Marzo",
              "Abril",
              "Mayo",
              "Junio",
              "Agosto",
              "Septiembre",
              "Osctubre",
              "Noviembre",
              "Diciembre",
            ]}
            color="dark"
            className={"d-flex flex-column justify-content-end col"}
            placeholder={"Mes"}
            register={register}
            errorMessage={"Campo obligatorio"}
            required
          />
          <Select
            id={"admin_meeting"}
            options={[
              "2022",
              "2023",
              "2024",
              "2025",
              "2026",
              "2027",
              "2028",
              "2029",
              "2030",
            ]}
            color="dark"
            className={"d-flex flex-column justify-content-end col"}
            placeholder={"Año"}
            register={register}
            errorMessage={"Campo obligatorio"}
            required
          />
        </div>
        <div className="col ">
          <Input
            id={"hour_meeting"}
            text={"Hora"}
            placeholder={"Escribe..."}
            type={"text"}
            register={register}
            errorMessage={"Campo obligatorio"}
            color="dark"
            required
          />
        </div>
      </div>
      <div className="d-flex gap-4">
        <div className="col-6 d-flex gap-2">
          <Select
            id={"hours_meeting"}
            text={"Duración"}
            options={["01 h", "02 h", "03 h", "04 h"]}
            color="dark"
            className={"col-6"}
            register={register}
            errorMessage={"Campo obligatorio"}
            required
          />
          <Select
            id={"min_meeting"}
            options={["00 m", "10 m", "20 m", "30 m", "40 m", "50 m"]}
            color="dark"
            className={"d-flex flex-column justify-content-end col-6"}
            register={register}
            errorMessage={"Campo obligatorio"}
            required
          />
        </div>
        <Input
          id={"link_meeting"}
          text={"Agregar link"}
          placeholder={"Escribe..."}
          className={"col-6"}
          type={"text"}
          register={register}
          errorMessage={"Campo obligatorio"}
          color="dark"
          required
        />
      </div>
      <Select
        id={"admin_meeting"}
        text={"Seleccionar conferencista"}
        options={["persona 1", "persona 2", "persona 3", "persona 4"]}
        color="dark"
        placeholder={"Seleccionar"}
        register={register}
        errorMessage={"Campo obligatorio"}
        required
      />
    </form>
  );
};
export default AddMeeting;
