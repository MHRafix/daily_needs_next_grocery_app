import React from "react";

export default function ErrorMessage({ message }) {
  return (
    <div>
      <h1
        style={{
          color: "red",
          fontSize: "30px",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        {message}
      </h1>
    </div>
  );
}
