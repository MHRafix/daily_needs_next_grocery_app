import React from "react";
import { BiError } from "react-icons/bi";
import { MdCloudDone } from "react-icons/md";

export const ErrorMessage = ({ message }) => {
  return (
    <div className="text-red-500 text-medium_light !font-bold text-center tracking-wider">
      <h1 style={{ fontWeight: "bold!important" }}>{message}</h1>
    </div>
  );
};

export const ErrorAlert = ({ message }) => {
  return (
    <div
      style={{ padding: "10px" }}
      className="text-white bg-red-500 text-medium_light text-left tracking-wider rounded-sm"
    >
      <h1 className="flex items-center">
        <BiError /> &nbsp; {message}
      </h1>
    </div>
  );
};

export const SuccessMessage = ({ message }) => {
  return (
    <div
      style={{ padding: "10px", background: "green" }}
      className="text-white bg-green text-medium_light text-left tracking-wider !p-1 rounded-sm"
    >
      <h1 className="flex items-center">
        <MdCloudDone /> &nbsp; {message}
      </h1>
    </div>
  );
};
