import React from "react";
import { products_data } from "../../fake_data/all_fakedata";
import Breadcrumb from "../commons/Breadcrumb/Breadcrumb";
import ShopArea from "../shop_page/ShopArea";

export default function SearchShopMain({ bread_string, slug }) {
  const searched_products = products_data.filter((product) =>
    product.title.includes(slug)
  );

  return (
    <>
      <Breadcrumb bread_nav={bread_string} />
      <ShopArea products_data={searched_products} />
    </>
  );
}
// products.productTitle;
