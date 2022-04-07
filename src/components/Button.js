import React from "react";

const Button = ({ name }) => {
  return (
    <button
      type="button"
      className="px-8 py-4 m-2 text-xl rounded-lg shadow-md text-white border bg-red-600 hover:bg-red-500 border-red-600 active:bg-white active:text-red-600 "
    >
      {name}
    </button>
  );
};

export default Button;
