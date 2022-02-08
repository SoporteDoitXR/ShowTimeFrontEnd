/*
  ESTE DOCUMENTO ES EL COMPONENTE DE VER SHOWTIMES DE USUARIO, HACE USO DE COMPONENTE CARDSCENE
  TEMPORALTMENTE SOLO MUESTRA ELEMENTOS ESTATICOS  
*/

import CardScene from "../UI/CardScene";

const adminShowtimes = () => {
  return (
    <>
      <div className="poppins-medium fs-3">Mis Showtimes</div>
      <div className="row g-4 mt-1">
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
      </div>
    </>
  );
};
export default adminShowtimes;
