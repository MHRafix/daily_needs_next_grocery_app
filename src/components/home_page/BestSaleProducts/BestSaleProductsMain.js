import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { products_data } from "../../../fake_data/all_fakedata";
import ProductCard from "../../../utilities/ProductCard";
import SectionTitle from "../../../utilities/SectionTitle";
import SliderArrow from "../../../utilities/SliderArrow";
export default function BestSaleProductsMain() {
  // slider arrows are import from utilities
  const { SampleNextArrow, SamplePrevArrow } = SliderArrow();

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 510,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="sale_products_wrapper">
      <div className="section_title_wrapper">
        <SectionTitle section_title="best selling products" percentage="20%" />
      </div>
      <Slider {...settings}>
        {products_data.map((product) => (
          <ProductCard key={product._id} product_data={product} />
        ))}
      </Slider>
    </div>
  );
}
