import React from "react";

const Button = ({ type, className, onClick, isDisable, children }) => {
  return (
    <button
      type={type}
      className={className}
      disabled={isDisable}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
