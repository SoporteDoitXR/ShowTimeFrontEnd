import React, { useEffect, useRef } from "react";
import { useState } from "react";

/*
    Aspectos permitidos:
    .ratioMobile: Pantallas para celulares (16:9 vertical)
    .ratio1-1: Pantallas Cuadradas
    .ratio2-1: Computadoras con pantallas ultra largas 21:9 (Similares)
    .ratio4-3: Tablets
    .ratio16-9: Computadores normales 
*/

const Scene = ({
  children,
  aspect, //Aspecto de pantalla
  bgColor, //Codigo de color para el fondo (#0000)
  bgImage, //Imagen de fondo
  animation,
  className,
  childrenDown
}) => {
  const ref = useRef(null);
  const refAux = useRef(null);
  const refContent = useRef(null);

  const refSlide = useRef(null);
  const refText = useRef(null);

  const [num, setNum] = useState(1);
  const [pause, setPause] = useState(false);

  let intervalRef = useRef();

  //useEffect(setTimeout(TimeIsOver, time));

  const decreaseNum = () => setNum((prev) => prev + 1);

  useEffect(() => {
    intervalRef.current = setInterval(decreaseNum, 20);
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    refText.current.style.display = "none";
    resizeAll(num);
    if (num >= 1000) {
      pauseC();
    }
  }, [num]);

  useEffect(() => {
    resizeAll(0);

    window.addEventListener("resize", resizeAll.bind(this));
    resizeAll();
  }, []);

  const pauseC = () => {
    if (!pause) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(decreaseNum, 1000);
    }
    setPause((prev) => !prev);
  };

  const resizeAll = (i) => {
    try {
      refSlide.current.style.display = "flex";

      refAux.current.style.width = "1919px";
      setTimeout(() => {
        try {
          refAux.current.style.width = "1920px";
        } catch (e) {}
      }, 10);

      if (window.innerHeight > refAux.current.clientWidth) {
        refText.current.style.display = "flex";
        refSlide.current.style.display = "none";
      } else {
        refText.current.style.display = "none";
        refSlide.current.style.display = "flex";
      }

      ref.current.style.transform = `scale(${0.01})`;

      if (
        (window.innerHeight * 100) / ref.current.clientHeight / 100 <=
        (window.innerWidth * 100) / 1920 / 100
      ) {
        ref.current.style.transform = `scale(${
          +((window.innerHeight * 100) / ref.current.clientHeight / 100) <= 1
            ? (window.innerHeight * 100) / ref.current.clientHeight / 100
            : 1
        })`;
      } else {
        ref.current.style.transform = `scale(${
          (window.innerWidth * 100) / 1920 / 100
        })`;
      }
    } catch (e) {}
  };

  return (
    <>
      <div
        ref={refText}
        className={`slide ${className}`}
        style={{ height: "100vh", backgroundColor: `${bgColor}` }}
      >
        <h4 style={{ color: `${bgColor}`, filter: "invert(100%)" }}>
          Girar su dispositivo por favor
        </h4>
      </div>
      <section
        ref={refSlide}
        className={`slide ${className}`}
        style={{ height: "100vh", backgroundColor: `${bgColor}` }}
      >
        <div
          ref={refAux}
          style={{
            width: "1920px",
          }}
        ></div>
        <div
          className={`width  ${aspect}`}
          ref={ref}
          style={{
            position: "absolute",
            width: `1920px`,
            backgroundColor: `${bgColor}`,
            backgroundImage: "url(" + bgImage + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div ref={refContent} className={(!childrenDown) ? `contenido ${animation}` : `contenido-down ${animation}`}>
            {children}
          </div>
        </div>
      </section>
    </>
  );
};

export default Scene;
