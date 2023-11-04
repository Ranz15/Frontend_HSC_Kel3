const Input = ({
  title,
  type,
  name,
  id,
  placeholder,
  htmlFor,
  className,
  containerClass,
  labelClass = "text-[#222222] text-xs font-semibold py-2",
}) => {
  return (
    <div className={`flex flex-col ${containerClass}`}>
      <label htmlFor={htmlFor} className={labelClass}>
        {title}
      </label>
      <input
        className={className}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
