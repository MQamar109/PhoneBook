import React from "react";
import { INPUT_VARIENTS } from "./constants";
const Input = ({ varient, type, id, name, value, onChange, placeholder }) => {
  const inputStyle = `appearance-none block w-full bg-gray-200 text-gray-700 border rounded ${INPUT_VARIENTS[varient]}`;

  return (
    <input
      type={type}
      className={inputStyle}
      id={id}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
