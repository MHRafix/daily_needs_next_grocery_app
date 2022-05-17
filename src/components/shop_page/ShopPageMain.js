import React from "react";
import { products_data } from "../../fake_data/all_fakedata";
import Breadcrumb from "../commons/Breadcrumb/Breadcrumb";
import ShopArea from "./ShopArea";

export default function ShopPageMain() {
  const bread_string = "Shop";
  return (
    <>
      <Breadcrumb bread_nav={bread_string} />
      <ShopArea products_data={products_data} />
    </>
  );
}
