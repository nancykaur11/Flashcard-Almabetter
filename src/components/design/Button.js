import React from "react";
export function  Button({ text, btnclass, fn, type, disabled, title, ref }) {
  return (
    <button
      onClick={fn}
      type={type}
      title={title}
      ref={ref}
      disabled={disabled}
      className={btnclass}
    >
      {text}
    </button>
  );
};

