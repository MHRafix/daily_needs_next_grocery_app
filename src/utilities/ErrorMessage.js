import React from "react";

export default function ErrorMessage({ message }) {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-red-500 text-center text-big font-bold ">
        {message}
      </h1>
    </div>
  );
}
