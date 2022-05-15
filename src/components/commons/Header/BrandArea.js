import Image from "next/image";
import NextLink from "next/link";
import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import Logo from "../../../images/logo/logo.webp";

export default function BrandArea() {
  const cart_list = useSelector((state) => state.cart_product.cart_list);
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
            <NextLink href="/cart_list" passHref>
              <div className="flex justify-end items-center text-white text-thin cursor-pointer">
                <span className="cart_badge">
                  <MdShoppingCart />
                  <span className="cart_counter">{cart_list.length}</span>
                </span>
                My Cart
              </div>
            </NextLink>
          </div>
        </div>
      </div>
    </div>
  );
}
