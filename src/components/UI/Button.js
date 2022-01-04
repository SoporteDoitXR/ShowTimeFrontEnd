/*
  COMPONENTE REUTILIZABLE DE BOTON.
  EL COMPONENTE VALIDA SI SOLO VA A TENER UN ICONO, O SI TENDRA EN ALGUNO DE LOS LADOS
  CONFIGURABLE EL TAMAÑO, COLOR, ETC. INCLUSO PUEDE AGREGAR MAS CLASSNAME COMO PROP
*/

const Button = ({
  type,
  color,
  light,
  size,
  text,
  iconLeft,
  iconRight,
  rounded,
  onClick,
  className,
  icon,
  iconClassName,
  textColor,
  disabled,
}) => {
  const IconLeft = iconLeft;
  const IconRight = iconRight;
  const Icon = icon;

  if (icon) {
    return (
      <div
        className={`cursor-pointer d-flex
          ${
            size == "small"
              ? "h-8 w-8"
              : size == "large"
              ? "fs-3 h-11 w-11"
              : "fs-6 h-10 w-10"
          }
          ${
            rounded == "none"
              ? "rounded-none"
              : rounded == "semi"
              ? "rounded-2xl"
              : "rounded-pill"
          }
          ${className}`}
        onClick={onClick}
      >
        <Icon className="m-auto" />
      </div>
    );
  }
  return (
    <button
      type={type == "submit" ? "submit" : type == "form" ? "submit" : "button"}
      className={`
        ${
          type == "text"
            ? `px-0 hover:font-semibold  ${
                color == "secondary"
                  ? "text-secondary hover:text-secondary"
                  : "text-primary hover:text-primary"
              }`
            : type == "sidebar"
            ? `px-0 font-semibold  ${
                color == "secondary"
                  ? "text-text-secondary hover:text-secondary"
                  : "text-text-secondary hover:text-primary"
              }`
            : `px-6 `
        }
        ${
          size == "small"
            ? "fs-5 md:text-sm"
            : size == "large"
            ? "fs-3"
            : "fs-6"
        }
        ${
          rounded == "none"
            ? "rounded-none"
            : rounded == "semi"
            ? "rounded-2xl"
            : "rounded-pill"
        }        
        p-2 flex flex-row ${className}
      `}
      onClick={onClick}
    >
      {iconLeft && <IconLeft className={`my-auto  me-2 ${iconClassName} `} />}

      <span
        className={`${!iconRight && !iconLeft && "m-auto"} ${
          type == "sidebar"
            ? "font-normal hover:font-semibold"
            : "font-semibold"
        }`}
      >
        {text}
      </span>
      {iconRight && <IconRight className={`my-auto  ms-2 ${iconClassName} `} />}
    </button>
  );
};

export default Button;
