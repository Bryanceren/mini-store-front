import { ErrorMessage } from "@hookform/error-message";
import React from "react";

export const FormInput = ({
  register,
  errors,
  name,
  title,
  validations,
  solo = false,
  ...rest
}) => {
  return (
    <div className="group relative">
      {!solo ? (
        <span className="group-focus-within:text-gray-600 text-gray-400  text-sm  left-2 transform transition-all ">
          {title}
        </span>
      ) : (
        <div className="h-4"></div>
      )}
      <input
        className="p-3 mb-4 border-0 outline-none bg-gray-100 w-full focus:bg-gray-200 transition-all duration-300"
        {...register(name, validations)}
        {...rest}
      ></input>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <p className="text-red-500 border-t-2 border-red-500 -mt-[17px] font-semibold transition-all transform text-sm">
            {message}
          </p>
        )}
      />
    </div>
  );
};

export const Select = ({ register, options, name, ...rest }) => {
  return (
    <select {...register(name)} {...rest}>
      {options.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};
