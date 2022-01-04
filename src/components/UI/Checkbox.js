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
  _ref,
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
