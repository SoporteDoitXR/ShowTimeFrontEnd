import React from "react";

const Input = ({
  id,
  text,
  placeholder,
  type,
  onChange,
  color,
  required,
  register,
  errorMessage,
  onKeyDown,
}) => {
  return (
    <div className="w-full py-2">
      <p className="tracking-wider">{text ? text : "text"}</p>
      {type != "textarea" ? (
        type != "email" ? (
          <input
            id={id}
            name={id}
            type={type}
            onKeyDown={onKeyDown && onKeyDown}
            defaultValue=""
            className={`py-2 px-3 w-full form-control  rounded-xl ${
              color == "dark"
                ? "bg-dark border-light border text-white"
                : "border-dark border-2"
            }`}
            placeholder={placeholder && placeholder}
            onChange={onChange && onChange}
            {...register(id, {
              required: { value: true, message: errorMessage },
            })}
          />
        ) : (
          <input
            id={id}
            name={id}
            type={type}
            onKeyDown={onKeyDown && onKeyDown}
            defaultValue=""
            className="py-2 px-3 w-full form-control border-dark border-2"
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
          className="py-2 px-3 w-full form-control h-15 border-dark border-2 rounded-xl"
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
  );
};

export default Input;
