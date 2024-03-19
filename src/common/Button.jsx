import React from "react";
import { BTN_VARIENTS } from "./constants/index";
const Button = ({ varient, type, onClick, isDisable, children }) => {
  const classStyle = BTN_VARIENTS[varient] || "";

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
