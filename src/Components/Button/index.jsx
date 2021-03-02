import React from "react";
import { Box } from "@material-ui/core";

function Button({ text }) {
  return (
    <button
      type="button"
      style={{
        backgroundColor: "#4F3F84",
        width: 336,
        height: 70,
        borderRadius: 15,
        outline: 0,
        border: 0,
        color: "#E1D3C1",
        fontSize: 20,
        fontWeight: "normal",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
}

export default Button;
