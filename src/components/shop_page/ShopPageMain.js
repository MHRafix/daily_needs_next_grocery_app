import React from "react";
import Breadcrumb from "../commons/Breadcrumb/Breadcrumb";
import ShopArea from "./ShopArea";

export default function ShopPageMain({ products_data }) {
  const bread_string = "Shop";
  return (
    <>
      <Breadcrumb bread_nav={bread_string} />
      <ShopArea products_data={products_data} />
    </>
  );
}
