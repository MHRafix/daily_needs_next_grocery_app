import React from "react";
import GridProductCard from "../../../utilities/GridProductCard";
import SectionTitle from "../../../utilities/SectionTitle";
export default function SaleProductsMain({ sale_products_data }) {
  return (
    <div className="sale_products_wrapper">
      <div className="section_title_wrapper">
        <SectionTitle
          section_title="top savers today"
          percentage="20%"
          link_href="/product_type/on-sale"
        />
      </div>
      <div className="prodcuts_area">
        {sale_products_data?.map((product) => (
          <GridProductCard key={product._id} product_data={product} />
        ))}
      </div>
    </div>
  );
}
