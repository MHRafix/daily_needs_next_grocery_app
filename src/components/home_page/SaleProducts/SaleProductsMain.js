import React from "react";
import SectionTitle from "../../../utilities/SectionTitle";

export default function SaleProductsMain() {
  return (
    <div className="sale_products_wrapper">
      <div className="section_title_area">
        <SectionTitle section_title="top savers today" percentage="20%" />
      </div>
      <div className="prodcuts_area"></div>
    </div>
  );
}
