import React from "react";
import CardScene from "../UI/CardScene";

const selecScene = () => {
  return (
    <div className="row g-4 my-3 mx-auto col-11 ">
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
  );
};
export default selecScene;
