const Select = ({
  value,
  text,
  defaultValue,
  id,
  name,
  className,
  placeholder,
  size,
  color,
  rounded,
  borderless,
  required,
  register,
  options,
  errorMessage,
  handleChange,
  selectWithId,
}) => {
  return (
    <div
      className={`${className || ""} ${
        size == "small" ? "fs-5" : size == "large" ? "fs-3" : "fs-6"
      } h-auto py-2`}
    >
      {text && <p className="poppins-medium tracking-wider">{text}</p>}
      {selectWithId ? (
        <select
          id={id}
          name={id}
          select={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          className={`w-full poppins-medium minimal ${
            rounded ? "rounded-pill" : "rounded-xl"
          } ${
            color == "dark"
              ? "dark-bg-2 border-light border text-white"
              : "border-dark border-2"
          } p-2`}
          required={required}
          {...(register &&
            register(id, {
              required: { value: true, message: errorMessage },
            }))}
        >
          {placeholder && (
            <option hidden selected>
              {placeholder}
            </option>
          )}
          {options.map((data, i) => (
            <option className="text-text-primary" value={data.id} key={data.id}>
              {data.value}
            </option>
          ))}
        </select>
      ) : (
        <select
          id={id}
          name={id}
          select={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          className={`w-full poppins-medium minimal  ${
            rounded ? "rounded-pill" : "rounded-xl"
          } ${
            color == "dark"
              ? "dark-bg-2 border-light border text-white"
              : "border-dark border-2"
          }  py-2 ps-3 pe-5`}
          required={required}
          {...(register &&
            register(id, {
              required: { value: true, message: errorMessage },
            }))}
        >
          {placeholder && (
            <option value="" disabled selected>
              {placeholder}
            </option>
          )}
          {options.map((value, i) => (
            <option className="poppins-light text-white" value={i} key={i}>
              {value}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Select;
