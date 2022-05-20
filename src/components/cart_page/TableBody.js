import Image from "next/image";
import NextLink from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  qtyDecrease,
  qtyIncrease,
  reduceProduct,
} from "../../redux/cart_products/action";

export default function TableBody({ carted_products }) {
  const { _id, thumbnail, title, prices, quantity } = carted_products;
  const [qty, setQty] = useState(quantity);
  const dispatch = useDispatch();

  return (
    <div className="table_body">
      <div className="table_body_item">
        {thumbnail && (
          <Image
            src={thumbnail}
            alt="carted items thumbnail"
            width={80}
            height={80}
          />
        )}
      </div>
      <div className="table_body_item">
        <NextLink href={`/shop/singleProducts/${_id}`} passHref>
          <h3 className="text-light text-black3 cursor-pointer hover:text-info_color hover:duration-300">
            {title}
          </h3>
        </NextLink>
      </div>
      <div className="table_body_item">৳ {prices?.sale_price}</div>
      <div className="table_body_item">
        <div id="add_to_cart_area">
          <button
            id="qty_controller"
            onClick={() => dispatch(qtyDecrease(_id))}
          >
            -
          </button>
          <span id="cart_qty">{quantity}</span>
          <button
            id="qty_controller"
            onClick={() => dispatch(qtyIncrease(_id))}
          >
            +
          </button>
        </div>
      </div>
      <div className="table_body_item">
        ৳ {(prices?.sale_price * quantity).toFixed(2)}
      </div>
      <div className="table_body_item">
        <span
          onClick={() => dispatch(reduceProduct(_id))}
          className="bg-red-500 text-white cursor-pointer text-semi_medium px-extra_padding3 !rounded-sm"
          id="cart_btn"
        >
          &times;
        </span>
      </div>
    </div>
  );
}
