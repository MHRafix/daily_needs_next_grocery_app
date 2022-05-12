import React from "react";
import BannerSlider from "./HomeSlider/BannerSlider/BannerSlider";
import CategorySlider from "./HomeSlider/CategoriesSlider/CategorySlider";
import SaleProductsMain from "./SaleProducts/SaleProductsMain";

export default function HomeMain() {
  return (
    <>
      <CategorySlider />
      <BannerSlider />
      <SaleProductsMain />
    </>
  );
}
