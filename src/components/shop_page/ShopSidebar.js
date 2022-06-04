import React from "react";
import {
  categories_data,
  stock_data,
  type_data,
} from "../../fake_data/all_fakedata";
import FilterCard from "../../utilities/FilterCard";
import MultiRangeSlider from "../../utilities/MultiRangeSlider";
import SidebarPartContainer from "../commons/layout/SidebarPartContainer";

export default function ShopSidebar({ priceRangeData, handleSetCookie }) {
  const { setMinRange, setMaxRange } = priceRangeData;

  return (
    <div className="sidebar_wrapper">
      <SidebarPartContainer filterer_name="filter by price">
        <MultiRangeSlider
          min={0}
          max={1000}
          onChange={({ min, max }) => {
            setMinRange(min);
            setMaxRange(max);
          }}
        />
        <button
          onClick={handleSetCookie}
          id="cart_btn"
          className="!mx-0 !p-extra_padding4 !rounded-sm !text-light"
        >
          Filter Now
        </button>
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
