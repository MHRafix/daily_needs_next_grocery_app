import React from "react";
import ShopProductArea from "./ShopProductArea";
import ShopSidebar from "./ShopSidebar";

export default function ShopArea({ products_data }) {
  return (
    <div className="shop_area_wrapper">
      <div className="grid_shop_area">
        <div className="sidebar_area">
          <ShopSidebar />
        </div>
        <div className="shop_area">
          <ShopProductArea products_data={products_data} />
        </div>
      </div>
    </div>
  );
}