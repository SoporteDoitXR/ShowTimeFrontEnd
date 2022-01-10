/*
  COMPONENTE REUTILIZABLE DE INPUT
  SE INTEGRO DENTRO DEL INPUT UN TEXTAREA
  SE COMPONE DE UN DIV CONTENEDOR, UN DIV PARA TEXTO Y EL INPUT O TEXAREA EN CUESTION

  PROPS:
  -ID
  -PROPS PARA TEXTO: TEXT (EL TEXTO EN SI), FONTSIZE
  -PLACEHOLDER
  -TYPE, TIPO DE INPUT
  -PROPS DE ICONO: ICON, REEMPLAZA TEXTO Y MUESTRA SOLO UN BOTON CON ICONO, ICONLEFT Y ICONRIGHT
  ICONOS QUE APARECEN EN SUS RESPECTIVOS LADOS DEL INPUT, SE RECIBE UNA IMAGEN O UN ICONO DE REACT-ICON
  -ONCHANGE, FUNCION PARA ONCHANGE PARA INPUT
  -COLOR, TEMA DE COLORES ESPECIFICAS DE SHOWTIME, RECIBE UN TEXT "DARK"
  -SIZE, TAMAÑO DE INPUT, SE RECIBE UN STRING 
  -ONKEYDOWN, FUNCION ONEYDOWN PARA INPUT
  -REGISTER,REQUIRED Y ERRORMESSAGE SON PARA CONTROLAR VALIDACIONES CON REACT-HOOK-FORM
*/

import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Input = ({
  id,
  text,
  fontsize,
  placeholder,
  type,
  iconLeft,
  iconRight,
  onChange,
  color,
  size,
  required,
  register,
  errorMessage,
  onKeyDown,
}) => {
  const IconLeft = iconLeft;
  const IconRight = iconRight;
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className={`w-full py-2 poppins-medium ${fontsize ? fontsize : "fs-6"}`}
    >
      {text && <p className="tracking-wider">{text}</p>}
      <div className="position-relative">
        {iconLeft && (
          <i className="h-full position-absolute ps-3 d-flex start-0 pointer-events-none">
            <IconLeft className="m-auto" />
          </i>
        )}

        {iconRight && (
          <i className="h-full position-absolute pe-3 d-flex end-0 pointer-events-none">
            <IconRight className="m-auto" />
          </i>
        )}

        {type == "password" && (
          <i
            className="h-full position-absolute pe-3 d-flex end-0 cursor-pointer"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {!showPassword ? (
              <FaEyeSlash className="m-auto" />
            ) : (
              <FaEye className="m-auto" />
            )}
          </i>
        )}
        {type != "textarea" ? (
          type != "email" ? (
            <input
              id={id}
              name={id}
              type={type == "password" ? (!showPassword ? type : "text") : type}
              onKeyDown={onKeyDown && onKeyDown}
              defaultValue=""
              className={`py-2 w-full form-control  rounded-xl ${
                color == "dark"
                  ? "dark-bg-2 border-light border text-white"
                  : "border-dark border-2"
              }  ${iconLeft ? "ps-4-5" : "ps-3"} ${
                iconRight ? "pe-4-5" : "pe-3"
              }`}
              placeholder={placeholder && placeholder}
              onChange={onChange && onChange}
              {...(register &&
                register(id, {
                  required: { value: true, message: errorMessage },
                }))}
            />
          ) : (
            <input
              id={id}
              name={id}
              type={type}
              onKeyDown={onKeyDown && onKeyDown}
              defaultValue=""
              className={`py-2 w-full form-control  rounded-xl ${
                color == "dark"
                  ? "dark-bg-2 border-light border text-white"
                  : "border-dark border-2"
              } ${iconLeft ? "ps-4-5" : "ps-3"} ${
                iconRight ? "pe-4-5" : "pe-3"
              }`}
              placeholder={placeholder && placeholder}
              onChange={onChange && onChange}
              {...register(id, {
                required: "Campo obligatorio",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: errorMessage,
                },
              })}
            />
          )
        ) : (
          <textarea
            id={id}
            name={id}
            maxLength="255"
            onChange={onChange && onChange}
            placeholder={placeholder && placeholder}
            rows="5"
            className={`py-2 w-full form-control rounded-xl ${
              color == "dark"
                ? "dark-bg-2 border-light border text-white"
                : "border-dark border-2"
            } ${
              size == "xl"
                ? "h-18"
                : size == "large"
                ? "h-16"
                : size == "normal"
                ? "h-15"
                : "h-14"
            } ${iconLeft ? "ps-4-5" : "ps-3"} ${iconRight ? "pe-4-5" : "pe-3"}`}
            {...(required
              ? register(id, {
                  required: { value: true, message: "Campo obligatorio" },
                  maxLength: {
                    value: 255,
                    message: "Por favor, use 255 carácteres o menos",
                  },
                })
              : register)}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
