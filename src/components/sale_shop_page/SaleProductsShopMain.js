import React from "react";
import Breadcrumb from "../commons/Breadcrumb/Breadcrumb";
import ShopArea from "../shop_page/ShopArea";

export default function SaleProductsShopMain({ products_data }) {
  const bread_string = "sale products";
  return (
    <>
      <Breadcrumb bread_nav={bread_string} />
      <ShopArea products_data={products_data} />
    </>
  );
}
