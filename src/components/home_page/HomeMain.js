import React from "react";
import BestSaleProductsMain from "./BestSaleProducts/BestSaleProductsMain";
import BannerSlider from "./HomeSlider/BannerSlider/BannerSlider";
import CategorySlider from "./HomeSlider/CategoriesSlider/CategorySlider";
import MiddleBanner from "./MiddleBanner/MiddleBanner";
import SaleProductsMain from "./SaleProducts/SaleProductsMain";

export default function HomeMain({ sale_products }) {
  return (
    <>
      <CategorySlider />
      <BannerSlider />
      <SaleProductsMain sale_products_data={sale_products} />
      <MiddleBanner />
      <BestSaleProductsMain sale_products_data={sale_products} />
    </>
  );
}
