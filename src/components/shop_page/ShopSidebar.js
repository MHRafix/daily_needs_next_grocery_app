import React from "react";
import { categories_data } from "../../fake_data/all_fakedata";
import Category from "../../utilities/Category";
import MultiRangeSlider from "../../utilities/MultiRangeSlider";
import SidebarPartContainer from "../commons/layout/SidebarPartContainer";

export default function ShopSidebar() {
  const stock_data = [
    { _id: 1, cat_name: "in stock" },
    { _id: 2, cat_name: "on sale" },
    { _id: 3, cat_name: "fixed sale" },
    { _id: 4, cat_name: "offer sale" },
  ];
  return (
    <div className="sidebar_wrapper">
      <SidebarPartContainer filterer_name="filter by price">
        <MultiRangeSlider
          min={0}
          max={1000}
          onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        />
      </SidebarPartContainer>

      <SidebarPartContainer filterer_name="product categories">
        {categories_data.map((category) => (
          <Category key={category._id} cat_data={category} />
        ))}
      </SidebarPartContainer>

      <SidebarPartContainer filterer_name="product status">
        {stock_data.map((stock) => (
          <Category key={stock._id} cat_data={stock} />
        ))}
      </SidebarPartContainer>

      <SidebarPartContainer filterer_name="latest products">
        latest products are here...!
      </SidebarPartContainer>
    </div>
  );
}
