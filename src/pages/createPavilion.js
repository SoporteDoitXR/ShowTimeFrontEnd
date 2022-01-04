/*
  PAGINA PRINCIPAL DE PABELLONES, CATEGORIAS Y STANDS.
  SU FUNCION ES MOSTRAR LA LISTA DE CATEGORIAS CREADAS, CREAR CATEGORIAS Y MOSTRAR LOS
  EXPOSITORES/STANDS DE CADA CATEGORIA
  ESTA PAGINA HACE USO DEL CODIGO DE REDIMENCIONAMIENTO POR JAVASCRIPT

  TEMPORALMENTE HACE USO DE ESTADOS/STATES PARA NAVEGAR ENTRE COMPONENTES
  TIENE 2 COMPONENTES
  -CATEGORYLIST, MUESTRA LA LISTA DE CATEGORIAS O STANDS CREADOS
  -CREATECATEGORY, MUESTRA UN FORMULARIO PARA CREAR CATEGORIAS


  ------NOTA IMPORTANTE-------
  SE ESTA TRABAJANDO EN ESTATICO, LO MOSTRADO ES SOLO VISUAL
*/

import React, { useState } from "react";
import Scene from "../components/canvas2d/scene";
import Div from "../components/canvas2d/div";
import plantilla1 from "../assets/plantillas/esc_plantilla-1.png";
import Text from "../components/canvas2d/text";

import { useForm } from "react-hook-form";
import CategoryList from "../components/createPavilion/categoryList";
import CreateCategory from "../components/createPavilion/createCategory";
import { Outlet } from "react-router-dom";

const editPavilion = () => {
  const [pavilionControl, setPavilionControl] = useState(0);
  const [img, setImg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //FUNCION QUE SE EJECUTA AL FINALIZAR LA VALIDACION
  const onSubmit = (e) => {
    console.log(e);
  };

  return (
    <Scene
      className={"bg-black"}
      aspect="ratio16-9"
      bgColor="#000"
      bgImage={plantilla1}
    >
      <Div
        className="bg-dark-transparent"
        width={1600}
        height={900}
        positionY={100}
        positionX={160}
      />
      <Text
        className="text-white fs-3 text-center poppins-medium"
        width={500}
        positionX={700}
        positionY={150}
      >
        Lista de categorias
        <div className="fs-6 mt-3">
          Categorias que estará dentro del pabellón principal
        </div>
      </Text>
      <Div
        className=" poppins-medium text-white custom-scroll"
        width={1500}
        height={600}
        positionY={310}
        positionX={220}
      >
        {/* SECCION DE COMPONENTES */}
        {pavilionControl == 0 && (
          <CategoryList setPavilionControl={setPavilionControl} />
        )}

        {pavilionControl == 1 && (
          <CreateCategory
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            register={register}
            errors={errors}
            img={img}
            setImg={setImg}
            setPavilionControl={setPavilionControl}
          />
        )}
      </Div>
      <Outlet />
    </Scene>
  );
};
export default editPavilion;
