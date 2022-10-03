import React from "react";

export default function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="bg-primary-600 hover:bg-primary-500 transition-colors text-white rounded-md px-8 py-4 font-bold font-satoshi"
    >
      {children}
    </button>
  );
}
