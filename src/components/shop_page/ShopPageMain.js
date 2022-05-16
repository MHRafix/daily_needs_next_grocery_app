import React from "react";
import Breadcrumb from "../commons/Breadcrumb/Breadcrumb";
import ShopArea from "./ShopArea";

export default function ShopPageMain() {
  const bread_string = "Shop";
  return (
    <>
      <Breadcrumb bread_nav={bread_string} />
      <ShopArea />
    </>
  );
}
