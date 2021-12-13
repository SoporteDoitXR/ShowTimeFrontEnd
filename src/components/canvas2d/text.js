import React, { Component } from "react";
import { useRef } from "react";

// import Animations from "../animations";

//Componente que le da formato a los textos del proyecto, recibe por paremetro los distintos formatos como color de la letra, tipografia
//posición, tamaño de la letra, animaciones, etc.
const Text = ({
  children,
  className = "",
  fontSize,
  color,
  bold,
  width,
  height,
  scroll,
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
    <span
      ref={ref}
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
      className={`${className} ${animation}`}
      style={{
        //Los parametros entrarían en estas reglas de estilo.
        position: "absolute",
        width: `${width + "px" || "auto"}`,
        height: `${height + "px" || "auto"}`,
        top: `${positionY}px`,
        left: `${positionX}px`,
        color: `${color}`,
        overflowX: `${scroll ? "auto" : "none"}`,
        fontWeight: `${bold ? "bold" : ""}`,
        fontSize: `${fontSize}px`,
        zIndex: `${zIndex}`,
      }}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default Text;
