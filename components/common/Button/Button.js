import React from "react";

const Button = React.forwardRef((props, ref) => {
  const {
    onClick,
    variants,
    size,
    children,
    disabled = false,
    ...rest
  } = props;
  const colorClass =
    variants == "translate"
      ? "hover:translate-x-1 hover:bg-primary"
      : variants == "clear"
      ? "hover:bg-primary hover:text-white"
      : "bg-primary text-white hover:bg-light";
  const sizeClass =
    size == "xl"
      ? " px-3 py-4 text-lg font-semibold"
      : size == "lg"
      ? " px-4 py-3 font-semibold"
      : " py-2 px-3";
  const disabledClass = disabled ? " cursor-not-allowed" : " cursor-pointer";

  const buttonClass =
    "flex relative gap-2 items-center transition-all duration-300 active:scale-95 " +
    colorClass +
    sizeClass +
    disabledClass;
  return (
    <button
      ref={ref}
      type="button"
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
});
export default Button;
