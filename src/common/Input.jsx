import React from "react";

const Input = ({ varient, type, id, name, value, onChange, placeholder }) => {
  const inputStyle = `appearance-none block w-full bg-gray-200 text-gray-700 border rounded ${getInputVarient(
    varient
  )}`;
  function getInputVarient(varient) {
    switch (varient) {
      case "smallGrayOutlined":
        return " py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white";
      case "mediumGrayOutlined":
        return "py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500";
      case "mediumBlueOutlined":
        return "p-4 ps-10 text-sm border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700";
      default:
        return "";
    }
  }
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
