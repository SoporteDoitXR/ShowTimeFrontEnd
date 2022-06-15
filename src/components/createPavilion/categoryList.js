/*
  ESTE COMPONENTE ES DE PAGINA DE PABELLONES, CATEGORIAS Y STANDS
  SU FUNCION ES MOSTRAR CATEGORIAS CREADAS Y LA LISTA DE EXPOSITORES DE CADA CATEGORIA


  ESTE COMPONENTE HACE USO DEL CODIGO DE REDIMENCIONAMIENTO POR JAVASCRIPT
  ES NECESARIO UBICAR LOS ELEMENTOS POR EJES X/Y Y SI ES NECESARIO, TAMBIEN SU WIDTH Y HEIGHT

  ----IMPORTANTE: TEMPORALMENTE ES SOLO ESTETICO, SOLO MUESTRA EJEMPLOS DE LAS CARDS A USAR EN CATEGORIAS Y EXPOSITORES
*/

import React, { useEffect, useState } from "react";
import CategoryCard from "../UI/categoryCard";
import plantilla1 from "../../assets/plantillas/esc_plantilla-1.png";
import CardScene from "../UI/CardScene";
import { getShowtimes } from "../../providers/apiShowtime";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router";
import standsJSON from "../../data/stand.json";
import { Link } from "react-router-dom";

const CategoryList = ({ setPavilionControl, userMode }) => {
  const cookies = new Cookies();
  let navigate = useNavigate();
  const [stands, setStands] = useState(null);

  useEffect(() => {
    setStands(standsJSON);
  },[])

  return (
    <div className="row m-0">
      {stands && stands.map((stand) => {
        return(
            <CardScene
              standSlug={stand.slug}
              textScene={stand.name}
              sceneIMG={stand.logo}
              cardMode={"showScene"}
              onClick={() => {navigate("../stand")}}
              userMode
            />
        )
      })
      }
      {!userMode && (
        <CardScene
          sceneIMG={
            "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          }
          cardMode={"addCategory"}
          onClick={() => setPavilionControl(1)}
        />
      )}
    </div>
  );
};
export default CategoryList;
