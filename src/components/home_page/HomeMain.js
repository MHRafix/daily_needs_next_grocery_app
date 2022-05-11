import React from "react";
import BannerSlider from "./HomeSlider/BannerSlider/BannerSlider";
import CategorySlider from "./HomeSlider/CategoriesSlider/CategorySlider";

export default function HomeMain() {
  return (
    <>
      <CategorySlider />
      <BannerSlider />
    </>
  );
}
