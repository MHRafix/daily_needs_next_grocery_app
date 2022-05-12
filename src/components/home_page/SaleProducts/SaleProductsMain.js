import React from "react";
import { products_data } from "../../../fake_data/all_fakedata";
import ProductCard from "../../../utilities/ProductCard";
import SectionTitle from "../../../utilities/SectionTitle";

export default function SaleProductsMain() {
  return (
    <div className="sale_products_wrapper">
      <div className="section_title_wrapper">
        <SectionTitle section_title="top savers today" percentage="20%" />
      </div>
      <div className="prodcuts_area">
        {products_data.map((product) => (
          <ProductCard key={product._id} product_data={product} />
        ))}
      </div>
    </div>
  );
}
