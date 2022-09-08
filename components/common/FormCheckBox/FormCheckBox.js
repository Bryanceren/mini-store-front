import styles from "./FormCheckBox.module.scss";
import React from "react";
export const FormCheckBox = ({ register, name, title, ...rest }) => {
  return (
    <div className="flex">
      <div className="relative mt-1">
        <label className="cursor-pointer">
          <input
            type="radio"
            value={title}
            {...register(name)}
            {...rest}
            className="w-4 h-4 border-gray-500 border-4 opacity-0"
          ></input>
          <span className={styles.checkmark}></span>
          <span className={styles.borderCheckmark}></span>
        </label>
      </div>
      <span className="ml-2">{title}</span>
    </div>
  );
};
