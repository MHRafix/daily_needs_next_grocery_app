import React from "react";
import Breadcrumb from "../commons/Breadcrumb/Breadcrumb";
import LoginMain from "./LoginMain";

export default function MyaccMain() {
  const bread_string = "My Account";
  return (
    <>
      <Breadcrumb bread_nav={bread_string} />
      <LoginMain />
    </>
  );
}
