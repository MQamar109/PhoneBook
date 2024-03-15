import React from "react";

const Button = ({ varient, type, onClick, isDisable, children }) => {
  const classStyle = `button ${getVarient(varient)}`;
  function getVarient(varient) {
    switch (varient) {
      case "primary":
        return "text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-800 cursor-pointer hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2";
      case "secondary":
        return "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-700 to-blue-300 group-hover:from-cyan-300 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800";
      case "tertiary":
        return "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2";
      case "danger":
        return "text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2";
      default:
        return "";
    }
  }
  return (
    <button
      type={type}
      className={classStyle}
      disabled={isDisable}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
