/*
  ESTE COMPONENTE ES DE PAGINA DE PABELLONES, CATEGORIAS Y STANDS
  SU FUNCION ES MOSTRAR CATEGORIAS CREADAS Y LA LISTA DE EXPOSITORES DE CADA CATEGORIA


  ESTE COMPONENTE HACE USO DEL CODIGO DE REDIMENCIONAMIENTO POR JAVASCRIPT
  ES NECESARIO UBICAR LOS ELEMENTOS POR EJES X/Y Y SI ES NECESARIO, TAMBIEN SU WIDTH Y HEIGHT

  ----IMPORTANTE: TEMPORALMENTE ES SOLO ESTETICO, SOLO MUESTRA EJEMPLOS DE LAS CARDS A USAR EN CATEGORIAS Y EXPOSITORES
*/

import React, { useState } from "react";
import CategoryCard from "../UI/categoryCard";
import plantilla1 from "../../assets/plantillas/esc_plantilla-1.png";
import CardScene from "../UI/CardScene";

const CategoryList = ({ setPavilionControl }) => {
  return (
    // row row-cols-3 g-4 m-0
    <div className="row g-4 my-3 mx-auto my-auto custom-scroll">
      {/* <CategoryCard name="Agricultura" img={plantilla1} admin={true} />
      <CategoryCard name="Vista user no admin" img={plantilla1} />
      <CategoryCard addCategory={() => setPavilionControl(1)} /> */}
      <CardScene
        textScene={"vehiculos"}
        sceneIMG={
          "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        }
        cardMode={"showScene"}
      />
      <CardScene
        textScene={"Agricultura"}
        sceneIMG={
          "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        }
        cardMode={"showScene"}
      />
      <CardScene
        textScene={"categoria ejemplo"}
        sceneIMG={
          "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        }
        cardMode={"showScene"}
      />
      <CardScene
        textScene={"vehiculos"}
        sceneIMG={
          "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        }
        cardMode={"showScene"}
      />
      <CardScene
        textScene={"Agricultura"}
        sceneIMG={
          "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        }
        cardMode={"showScene"}
      />
      <CardScene
        sceneIMG={
          "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        }
        cardMode={"addCategory"}
        onClick={() => setPavilionControl(1)}
      />
    </div>
  );
};
export default CategoryList;
