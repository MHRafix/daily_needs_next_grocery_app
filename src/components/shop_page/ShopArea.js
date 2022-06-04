import Cookie from "js-cookie";
import React, { useState } from "react";
import ShopProductArea from "./ShopProductArea";
import ShopSidebar from "./ShopSidebar";

export default function ShopArea({ products_data }) {
  const filtered_price =
    Cookie.get("price_range") && JSON.parse(Cookie.get("price_range"));

  const [minRange, setMinRange] = useState(filtered_price?.minPrice);
  const [maxRange, setMaxRange] = useState(filtered_price?.maxPrice);
  const priceRangeData = { setMinRange, setMaxRange };

  const handleSetCookie = (min, max) => {
    // Cookie.set(
    //   "price_range",
    //   JSON.stringify({ minPrice: minRange, maxPrice: maxRange }),
    //   {
    //     expires: 1, // 1 days
    //     secure: true,
    //     sameSite: "strict",
    //     path: "/",
    //   }
    // );
  };

  const filtered_data = products_data.filter(
    (product) =>
      product?.prices?.regular_price >= minRange &&
      product?.prices?.regular_price <= maxRange
  );

  return (
    <div className="shop_area_wrapper">
      <div className="grid_shop_area">
        <div className="sidebar_area">
          <ShopSidebar
            priceRangeData={priceRangeData}
            handleSetCookie={handleSetCookie}
          />
        </div>
        <div className="shop_area">
          <ShopProductArea products_data={filtered_data} />
        </div>
      </div>
    </div>
  );
}
