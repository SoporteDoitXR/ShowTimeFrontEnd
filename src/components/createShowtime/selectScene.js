import React from "react";
import Button from "../../components/UI/Button";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import CardScene from "../UI/CardScene";
import { useNavigate } from "react-router";

const SelectScene = ({ sceneController }) => {
  let navigation = useNavigate();
  return (
    <div className="mt-6">
      <div className="col-12 text-center">
        <div className="fs-2">Selecciona tus escenarios</div>
        <div className="">
          Puedes comenzar creando un espacio para tu empresa
        </div>
      </div>
      <div className="row g-4 mt-3 ">
        <CardScene
          textScene={"Fachada"}
          sceneIMG={
            "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          }
          cardMode={"showScene"}
        />
        <CardScene
          textScene={"Recepción"}
          sceneIMG={
            "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          }
          cardMode={"showScene"}
        />
        <CardScene
          textScene={"Pabellón Principal"}
          sceneIMG={
            "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          }
          cardMode={"showScene"}
        />
        <CardScene
          textScene={"Sala de conferencia"}
          sceneIMG={
            "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          }
          cardMode={"showScene"}
        />
        <CardScene
          textScene={"Sala networking"}
          sceneIMG={
            "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          }
          cardMode={"showScene"}
        />
        <CardScene
          textScene={"Sala privada"}
          sceneIMG={
            "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          }
          cardMode={"showScene"}
        />
      </div>

      <div className="d-flex justify-content-center gap-5 my-5">
        <Button
          className="btn btn-dark px-5"
          text="Cancelar"
          onClick={() => sceneController(1)}
        />
        <Button
          className="btn btn-primary px-5"
          text="Crear espacio"
          onClick={() => navigation("/editScene")}
        />
      </div>
    </div>
  );
};
export default SelectScene;
