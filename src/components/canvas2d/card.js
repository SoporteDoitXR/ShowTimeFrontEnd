import React, { useRef } from "react";

//Este componente es el contenedor de las imagenes de actividades, recibe por parametro distintos datos de tamaño, posición, opacidad, tipos de borde, 
//las imagen de la actividad, animación, etc.
const Card = ({
  className,
  positionY,
  positionX,
  width,
  height,
  opacity,
  bgImage,
  bgColor,
  borderRadius,
  zIndex = 2,
  borderSize,
  colorBorde,
  animation,
  hoverEnter,
  hoverExit,
  //Contenido Hijo
  children,
  onClick,
}) => {
  const ref = useRef(null);
  return (
    <div>
      <button
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
        onClick={onClick}
        className={`${className} ${animation}`}
        style={{
          position: "absolute",
          top: `${positionY}px`,
          left: `${positionX}px`,
          width: `${width}px`,
          height: `${height}px`,
          opacity: `${opacity}`,
          backgroundColor: `${bgColor}`,
          backgroundImage: "url(" + bgImage + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: `${zIndex}`,
          borderRadius: `${borderRadius}px`,
          border: `${colorBorde} ${borderSize}px solid`,
        }}
      >
        {children}
      </button>
    </div>
  );
};

export default Card;
