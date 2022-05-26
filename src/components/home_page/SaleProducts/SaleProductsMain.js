import React from "react";
import ProductCard from "../../../utilities/ProductCard";
import SectionTitle from "../../../utilities/SectionTitle";
export default function SaleProductsMain({ sale_products_data }) {
  return (
    <div className="sale_products_wrapper">
      <div className="section_title_wrapper">
        <SectionTitle section_title="top savers today" percentage="20%" />
      </div>
      <div className="prodcuts_area">
        {sale_products_data?.map((product) => (
          <ProductCard key={product._id} product_data={product} />
        ))}
      </div>
    </div>
  );
}
