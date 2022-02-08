import React, { Component } from "react";
import { useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Componente para crear los diferentes botones que utiliza el proyecto.
//Por parametro se le puede indicar el tamaño, posición, color, borde, etc, icono, etc.
const Button = ({
  type,
  children,
  fontSize,
  iconLeft,
  iconRight,
  classNameBtn,
  classNameText,
  color,
  bgColor,
  icon,
  positionX = 0,
  positionY = 0,
  animation,
  onClick,
  to,
  zIndex = 1,
  hoverEnter,
  hoverExit,
  bold,
}) => {
  const IconLeft = iconLeft;
  const IconRight = iconRight;
  const Icon = icon;

  const ref = useRef(null);

  if (to) {
    if (icon) {
      return (
        <Link
          ref={ref}
          onMouseEnter={() => {
            var auxClass = ref.current.className
              ? ""
              : ref.current.className?.replace(hoverExit || "", "");

            ref.current.className =
              hoverEnter +
              " " +
              auxClass +
              " " +
              `${classNameBtn} ${animation}`;
          }}
          onMouseLeave={() => {
            var auxClass = ref.current.className
              ? ""
              : ref.current.className?.replace(hoverEnter || "", "");
            ref.current.className =
              hoverExit + " " + auxClass + " " + `${classNameBtn} ${animation}`;
          }}
          to={to ? to : "#"}
          className={`${classNameBtn} ${animation}`}
          style={{
            position: "absolute",
            top: `${positionY}px`,
            left: `${positionX}px`,
            zIndex: `${zIndex}`,
            color: `${color}`,
            fontSize: `${fontSize}px`,
            backgroundColor: `${bgColor}`,
          }}
        >
          <Icon className="m-auto" />
        </Link>
      );
    }
    return (
      <Link
        ref={ref}
        onMouseEnter={() => {
          var auxClass = ref.current.className
            ? ""
            : ref.current.className?.replace(hoverExit || "", "");

          ref.current.className =
            hoverEnter + " " + auxClass + " " + `${classNameBtn} ${animation}`;
        }}
        onMouseLeave={() => {
          var auxClass = ref.current.className
            ? ""
            : ref.current.className?.replace(hoverEnter || "", "");
          ref.current.className =
            hoverExit + " " + auxClass + " " + `${classNameBtn} ${animation}`;
        }}
        to={to ? to : "#"}
        type={type}
        className={`${classNameBtn} ${animation}`}
        style={{
          position: "absolute",
          top: `${positionY}px`,
          left: `${positionX}px`,
          color: `${color}`,
          fontSize: `${fontSize}px`,
          backgroundColor: `${bgColor}`,
        }}
      >
        {iconLeft && <IconLeft className="my-auto  mr-2" />}
        <span
          className={`${!iconRight && !iconLeft && "m-auto"} ${classNameText}`}
          style={{ color: `${color}`, fontWeight: `${bold ? "bold" : "300"}` }}
        >
          {children}
        </span>
        {iconRight && <IconRight className="my-auto ml-2" />}
      </Link>
    );
  } else {
    if (icon) {
      return (
        <button
          ref={ref}
          onMouseEnter={() => {
            var auxClass = ref.current.className
              ? ""
              : ref.current.className?.replace(hoverExit || "", "");

            ref.current.className =
              hoverEnter +
              " " +
              auxClass +
              " " +
              `${classNameBtn} ${animation}`;
          }}
          onMouseLeave={() => {
            var auxClass = ref.current.className
              ? ""
              : ref.current.className?.replace(hoverEnter || "", "");
            ref.current.className =
              hoverExit + " " + auxClass + " " + `${classNameBtn} ${animation}`;
          }}
          className={`${classNameBtn} ${animation}`}
          style={{
            position: "absolute",
            top: `${positionY}px`,
            left: `${positionX}px`,
            color: `${color}`,
            fontSize: `${fontSize}px`,
            backgroundColor: `${bgColor}`,
            zIndex: `${zIndex}`,
          }}
          onClick={onClick}
        >
          <Icon className="m-auto" />
        </button>
      );
    }
    return (
      <button
        ref={ref}
        onMouseEnter={() => {
          var auxClass = ref.current.className
            ? ""
            : ref.current.className?.replace(hoverExit || "", "");

          ref.current.className =
            hoverEnter + " " + auxClass + " " + `${classNameBtn} ${animation}`;
        }}
        onMouseLeave={() => {
          var auxClass = ref.current.className
            ? ""
            : ref.current.className?.replace(hoverEnter || "", "");
          ref.current.className =
            hoverExit + " " + auxClass + " " + `${classNameBtn} ${animation}`;
        }}
        to={to ? to : "#"}
        type={type}
        className={`${classNameBtn} ${animation}`}
        onClick={onClick}
        style={{
          position: "absolute",
          top: `${positionY}px`,
          left: `${positionX}px`,
          color: `${color}`,
          fontSize: `${fontSize}px`,
          backgroundColor: `${bgColor}`,
        }}
      >
        {iconLeft && <IconLeft className="my-auto  mr-2" />}
        <span
          className={`${!iconRight && !iconLeft && "m-auto"} ${classNameText}`}
          style={{
            color: `${color}`,
            fontWeight: `${bold ? "bold" : "600"}`,
          }}
        >
          {children}
        </span>
        {iconRight && <IconRight className="my-auto ml-2" />}
      </button>
    );
  }
};

export default Button;
