import React from "react";
import { categories_data } from "../../fake_data/all_fakedata";
import FilterCard from "../../utilities/FilterCard";
import MultiRangeSlider from "../../utilities/MultiRangeSlider";
import SidebarPartContainer from "../commons/layout/SidebarPartContainer";

export default function ShopSidebar() {
  const stock_data = [
    { _id: 1, filter_name: "in-stock" },
    { _id: 2, filter_name: "stock-out" },
  ];

  const type_data = [
    { _id: 2, filter_name: "on-sale" },
    { _id: 3, filter_name: "fixed-sale" },
    { _id: 4, filter_name: "offer-sale" },
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
          <FilterCard
            key={category._id}
            filter_type="categories"
            data={category}
          />
        ))}
      </SidebarPartContainer>

      <SidebarPartContainer filterer_name="product status">
        {stock_data.map((stock) => (
          <FilterCard
            key={stock._id}
            filter_type="product_status"
            data={stock}
          />
        ))}
      </SidebarPartContainer>

      <SidebarPartContainer filterer_name="product type">
        {type_data.map((type) => (
          <FilterCard key={type._id} filter_type="product_type" data={type} />
        ))}
      </SidebarPartContainer>
    </div>
  );
}
