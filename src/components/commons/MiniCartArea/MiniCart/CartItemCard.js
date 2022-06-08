import Image from "next/image";
import NextLink from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { handleReduceCart } from "../../../../utilities/handleReduceCart";

export default function CartItemCard({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="cart_item_wrapper">
      <div className="cart_thumbnail shadow-lg">
        <Image src={product?.thumbnail} alt="" width={80} height={80} />
      </div>
      <div className="ml-10 !text-left">
        <div id="stock_slae_badge">
          <div id="sale_badge">15%</div>
          <div
            onClick={() => handleReduceCart(product?._id, dispatch)}
            className="text-red-500 cursor-pointer text-semi_medium"
          >
            &times;
          </div>
        </div>
        <div className="title_price_amount">
          <NextLink href={`/shop/singleProducts/${product?.slug}`} passHref>
            <h3
              id="product_title"
              className="!text-thin !font-light !text-slate-600"
            >
              {product?.title}
            </h3>
          </NextLink>
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
  );
}
