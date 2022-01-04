/*
  ESTE COMPONENTE ES DE MODAL GLOBAL, SECCION SELECCION DE ESCENA
  SU FUNCION ES MOSTRAR LOS ESCENARIOS QUE EL ADMIN TIENE ACTIVOS PARA SU EDICION

  SI EL USUARIO NO ES ADMIN, LO REDIRECCIONA A LA VISTA DEL ESCENARIO YA CREADO
*/

import React from "react";
import { useNavigate } from "react-router-dom";
import CardScene from "../UI/CardScene";

const selecScene = () => {
  let navigation = useNavigate();
  return (
    <div className="row g-4 my-3 mx-auto col-11 my-auto">
      <CardScene
        textScene={"Fachada"}
        sceneIMG={
          "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        }
        cardMode={"showScene"}
        onClick={() => navigation("/editScene")}
      />
      <CardScene
        textScene={"Recepción"}
        sceneIMG={
          "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        }
        cardMode={"showScene"}
        onClick={() => navigation("/editScene")}
      />
      <CardScene
        textScene={"Pabellón Principal"}
        sceneIMG={
          "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        }
        cardMode={"showScene"}
        onClick={() => navigation("/editPavilion")}
      />
      <CardScene
        textScene={"Sala de conferencia"}
        sceneIMG={
          "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        }
        cardMode={"showScene"}
        onClick={() => navigation("/editMeeting")}
      />
      <CardScene
        textScene={"Sala networking"}
        sceneIMG={
          "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        }
        cardMode={"showScene"}
        onClick={() => navigation("/editNetworking")}
      />
      <CardScene
        textScene={"Sala privada"}
        sceneIMG={
          "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        }
        cardMode={"showScene"}
      />
    </div>
  );
};
export default selecScene;
