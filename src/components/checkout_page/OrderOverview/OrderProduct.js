import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

export default function OrderProduct({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center">
      <div className="cart_item_wrapper w-4/6">
        <div className="cart_thumbnail shadow-lg">
          <Image
            src={product?.thumbnail}
            alt="order_card"
            width={70}
            height={70}
          />
        </div>
        <div className="ml-10 !text-left">
          <div className="title_price_amount">
            <h3
              id="product_title"
              className="!text-thin !font-light !text-slate-600 !cursor-default"
            >
              {product?.title}
            </h3>
            <span className="text-thin font-light tracking-wider">
              -{product?.additional_info?.weight}
            </span>
            <br />
            <span className="font-semibold text-black my-2 tracking-wider text-sm">
              {product?.quantity} x ৳
              {product?.prices?.sale_price !== 0
                ? product?.prices?.sale_price
                : product?.prices?.regular_price}
            </span>
          </div>
        </div>
      </div>
      <div className="w-2/6">
        ৳ &nbsp;
        {(
          product?.quantity *
          (product?.prices?.sale_price !== 0
            ? product?.prices?.sale_price
            : product?.prices?.regular_price)
        ).toFixed(2)}
      </div>
    </div>
  );
}
