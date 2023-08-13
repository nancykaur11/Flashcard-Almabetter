import React from "react";
// Button component that accepts various props to customize.
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

