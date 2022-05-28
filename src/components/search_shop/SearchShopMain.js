import React from "react";
import Breadcrumb from "../commons/Breadcrumb/Breadcrumb";
import ShopArea from "../shop_page/ShopArea";

export default function SearchShopMain({ bread_string, searched_products }) {
  return (
    <>
      <Breadcrumb bread_nav={bread_string} />
      <ShopArea products_data={searched_products} />
    </>
  );
}
// products.productTitle;
