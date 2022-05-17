import React from "react";
import { products_data } from "../../fake_data/all_fakedata";
import Breadcrumb from "../commons/Breadcrumb/Breadcrumb";
import ShopArea from "../shop_page/ShopArea";

export default function CategoryShopMain({ bread_string, slug }) {
  const category_products = products_data.filter(
    (product) => slug == product.category
  );

  return (
    <>
      <Breadcrumb bread_nav={bread_string} />
      <ShopArea products_data={category_products} />
    </>
  );
}
