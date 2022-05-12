import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Banner1 from "../../../../images/banners/slider1.webp";
import Banner2 from "../../../../images/banners/slider2.webp";
import SliderArrow from "../../../../utilities/SliderArrow";

export default function BannerSlider() {
  // slider arrows are import from utilities
  const { SampleNextArrow, SamplePrevArrow } = SliderArrow();

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="banner_slider_wrapper">
      <Slider {...settings}>
        <div className="slider_banner_wrapper">
          <Image src={Banner1} alt="first banner" />
        </div>
        <div className="slider_banner_wrapper">
          <Image src={Banner2} alt="first banner" />
        </div>
      </Slider>
    </div>
  );
}
