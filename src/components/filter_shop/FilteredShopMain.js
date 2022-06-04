import React from "react";
import Breadcrumb from "../commons/Breadcrumb/Breadcrumb";
import ShopArea from "../shop_page/ShopArea";

export default function FilteredShopMain({ bread_string, filtered_products }) {
  return (
    <>
      <Breadcrumb bread_nav={bread_string} />
      <ShopArea products_data={filtered_products} />
    </>
  );
}
