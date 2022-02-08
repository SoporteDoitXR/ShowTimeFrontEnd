import React, { Component } from "react";
import { useRef } from "react";

//Componente encargado de almacenar y mostrar los videos.
const Video = ({
  url,
  className,
  width,
  height,
  animation,
  hoverEnter,
  hoverExit,
  positionX,
  positionY,
  zIndex = 1,
}) => {
  const ref = useRef(null);
  return (
    <div //Contenedor que almacenará el inframe del vídeo.
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
    >
      {url.includes("youtube.com/watch?v=") ? ( //El url del vídeo entraría aquí por parametro.
        <iframe //Inframe del vídeo, lleva sus propios estilos que llegan por parametro.
          className={`${className} ${animation}`}
          style={{
            position: "absolute",
            top: `${positionY}px`,
            left: `${positionX}px`,
            width: `${width}px`,
            height: `${height ? height + "px" : "auto"}`,
            zIndex: `${zIndex}`,
          }}
          src={`https://www.youtube.com/embed/${url.substring( //Luego el url se incluye en el src del inframe.
            url.indexOf("?v=") + 3,
            url.length
          )}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <video //El video como tal cuenta con sus propios estilos 
          className={className}
          style={{
            position: "absolute",
            top: `${positionY}px`,
            left: `${positionX}px`,
            width: `${width}px`,
            height: `${height ? height + "px" : "auto"}`,
            zIndex: `${zIndex}`,
          }}
          src={`${url}`}
          controls
        />
      )}
    </div>
  );
};

export default Video;
