/*
  COMPONENTE REUTILIZABLE DE CHECKBOX CUSTOM
  CONSTA DE UN INPUT CHECKBOX  Y UN LABEL PARA TEXTO

  RECIBE COMO PROPS
  -DEFAULT CHECKED: BOOLEAN PARA PONER UN CHECK POR DEFECTO
  -TEXT, TEXTO QUE PONDRA EN EL LABEL
  =ID
  -VALUE, VALOR QUE TENDRA EL CHECKBOX
  -CLASSNAME, CLASES CSS PARA CUSTOMIZAR MAS EL CHECKBOX
  -SIZE, TAMAÑO DEL CHECKBOX SEGUN LAS ESPECIFICACIONES, PUEDE SER SOBRE ESCRITO CON CLASSNAMES
  -COLOR, COLOR DEL CHECKBOX
  -ONCHANGE, FUNCION PARA EL ONCHANGE DEL CHECKBOX
  -REGISTER, REGISTER DEL REACT-HOOK-FORM
  -ERRORMESSAGE, MENSAGE DE ERROR MOSTRADO POR EL REACT-HOOK-FORM
  -REQUIRED, DEL REACT-HOOK-FORM
*/

const CheckBox = ({
  defaultChecked,
  text,
  id,
  value,
  className,
  size,
  color,
  onChange,
  register,
  errorMessage,
  required,
}) => {
  return (
    <div
      className={`${className || ""} ${
        size == "small" ? "fs-5" : size == "large" ? "fs-3" : "fs-6"
      } h-auto d-flex my-4`}
    >
      <input
        aria-autocomplete="none"
        className={`checkbox p-2 my-auto me-2 ${color}`}
        id={id}
        value={value}
        type="checkbox"
        defaultChecked={defaultChecked}
        name={id}
        onChange={onChange}
        {...(register &&
          register(id, {
            required: { value: true, message: errorMessage },
          }))}
      />
      <label htmlFor={id} />
      {text && (
        <p className="poppins-medium px-2 d-inline-block my-auto">{text}</p>
      )}
    </div>
  );
};

export default CheckBox;
