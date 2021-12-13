import React, { Component } from "react";
import { useRef } from "react";

//Componente que almacena y muestra las imagenes utilizadas en el proyecto.
//Este recibe por parametro los diferentes formatos y recursos que debe llevar la imagen como el nombre de la imagen y dónde está almacenada, el color de fondo, 
//su posición, su tamaño, animación que debe de llevar, etc.
const Slider = ({
  className,
  bgColor, //Codigo de color para el fondo (#0000)
  bgImage, //Imagen de fondo
  alt,
  width,
  height,
  animation,
  positionX = 0,
  positionY = 0,
  zIndex = 1,
  onClick,
  hoverEnter,
  hoverExit,
}) => {
  const ref = useRef(null);
  return (
    <>
      <div
        ref={ref}
        onClick={onClick}
        onMouseEnter={() => {
          var auxClass = ref.current.className
            ? ""
            : ref.current.className?.replace(hoverExit || "", "");

          ref.current.className =
            hoverEnter + " " + auxClass + " " + `${className} ${animation}`;
        }}
        onMouseLeave={() => {
          var auxClass = ref.current.className
            ? ""
            : ref.current.className?.replace(hoverEnter || "", "");
          ref.current.className =
            hoverExit + " " + auxClass + " " + `${className} ${animation}`;
        }}
        style={{
          position: "absolute",
          top: `${positionY}px`,
          left: `${positionX}px`,
          zIndex: `${zIndex}`,
        }}
      >
        <img
          alt={alt}
          className={`${className} ${animation}`}
          style={{
            width: `${width}px`,
            height: `${height ? height + "px" : "auto"}`,
            backgroundColor: `${bgColor}`,
          }}
          src={bgImage}
        ></img>
      </div>
    </>
  );
};

export default Slider;
