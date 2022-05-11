import Image from "next/image";
import React from "react";
import { MdShoppingCart } from "react-icons/md";
import Logo from "../../../images/logo/logo.webp";

export default function BrandArea() {
  return (
    <div className="brand_area_wrapper">
      <div className="container_wrapper">
        <div className="brand_area">
          <div className="brand_wrapper">
            <Image
              src={Logo}
              alt="site logo"
              width={127}
              height={38}
              // layout="responsive"
            />
          </div>
          <div className="serach_area">
            <input
              className="search_field"
              type="search"
              placeholder="Enter keyword here..."
            />
            <button className="btn btn-search">Search</button>
          </div>
          <div className="cart_area">
            <div className="flex justify-center items-center text-white">
              <span className="cart_badge">
                <MdShoppingCart />
                <span className="cart_counter">0</span>
              </span>
              My Cart
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}
