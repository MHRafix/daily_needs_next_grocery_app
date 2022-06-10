import Image from "next/image";
import React, { useState } from "react";
import { FaTruckMoving } from "react-icons/fa";
import { GiBeachBag } from "react-icons/gi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { handleAddToCart } from "../../utilities/handleCart";

export default function ProductView({ product }) {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  return (
    <div className="single_product_view">
      <div className="image_wrapper">
        <Image src={product?.thumbnail_big} alt="single_product_image" />
      </div>
      <div className="product_details_wrapper">
        {product?.prices?.sale_price !== 0 && (
          <div
            id="sale_badge"
            className="!text-light !w-per_16 !py-extra_padding2"
          >
            {Math.ceil(
              (product?.prices?.regular_price - product?.prices?.sale_price) /
                (product?.prices?.regular_price / 100)
            )}
            % OFF
          </div>
        )}
        <h1 className="product_title">{product?.title}</h1>
        <div id="product_price">
          <span
            id={
              product?.prices?.sale_price !== 0 ? "regular_price" : "sale_price"
            }
            className="!text-info_color !text-normal"
          >
            ৳ {product?.prices?.regular_price}
          </span>

          {product?.prices?.sale_price !== 0 && (
            <span id="sale_price" className="!text-green !text-medium">
              ৳ {product?.prices?.sale_price}
            </span>
          )}
        </div>
        <h5 className="text-thin text-black3 capitalize">
          {product?.product_status}
        </h5>
        <div className="flex items-center my-7">
          {product?.stock_available > 0 && (
            <div id="add_to_cart_action">
              <button
                id="qty_controller"
                className="!shadow-md !bg-indigo-50"
                onClick={() => setQty(qty - 1)}
              >
                -
              </button>
              <span id="cart_qty">{qty}</span>
              <button
                id="qty_controller"
                className="!shadow-md !bg-indigo-50"
                onClick={() => setQty(qty + 1)}
              >
                +
              </button>
            </div>
          )}
          <div id="add_to_cart_btn">
            {product?.stock_available > 0 && (
              <button
                id="cart_btn"
                className="!mt-0 !py-1 !px-1.5"
                onClick={() => handleAddToCart(product, dispatch, qty)}
              >
                <MdOutlineShoppingCart /> &nbsp; Add to cart
              </button>
            )}
          </div>
        </div>
        <div className="desc text-black3 my-10">
          <h3 className="font-semibold text-semi_medium my-2">
            Quick Overview
          </h3>
          <p className="text-light">
            {product?.additional_info?.description.slice(0, 200)}...
          </p>
        </div>
        <div className="taxenomy text-sm text-black3">
          <span className="text-sm text-red-500">Category : </span>
          {product?.category}
        </div>
        <div className="feature_card_wrapper">
          <h3 className="text-light text-black2">Why shop from Daily Need?</h3>
          <div className="our_features">
            <div className="feature_card">
              <div className="card_icon">
                <FaTruckMoving />
              </div>
              <div className="card_content">
                <h3 className="text-light text-info_color">Free Delivery</h3>
                <p className="text-thin text-black3">Lorem ispum dollar...</p>
              </div>
            </div>
            <div className="feature_card">
              <div className="card_icon">
                <GiBeachBag />
              </div>
              <div className="card_content">
                <h3 className="text-light text-info_color">100% Guarantee</h3>
                <p className="text-thin text-black3">Lorem ispum dollar...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
