import Image from "next/image";
import React, { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function ProductView({ product }) {
  const [qty, setQty] = useState(1);

  return (
    <div className="single_product_view">
      <div className="image_wrapper">
        {product?.thumbnail && (
          <Image src={product?.thumbnail} alt="single_product_image" />
        )}
      </div>
      <div className="product_details_wrapper p-2 bg-white shadow-lg">
        <span id="sale_badge" className="!text-light">
          15% OFF
        </span>
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
        <div className="my-10">
          <div id="add_to_cart_area" className="!w-36 !mx-0">
            <button id="qty_controller" onClick={() => setQty(qty - 1)}>
              -
            </button>
            <span id="cart_qty">{qty}</span>
            <button id="qty_controller" onClick={() => setQty(qty + 1)}>
              +
            </button>
          </div>
          <div id="add_to_cart_btn">
            <button id="cart_btn" className="!mx-0 !px-1.9 !py-1 !text-light">
              <MdOutlineShoppingCart /> &nbsp; Add to cart
            </button>
          </div>
          <div className="desc text-black3 my-5">
            <p>{product?.additional_info?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
