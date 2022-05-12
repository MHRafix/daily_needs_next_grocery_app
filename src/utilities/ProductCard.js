import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";

export default function ProductCard({ product_data }) {
  const {
    _id,
    title,
    thumbnail,
    prices,
    category,
    reviews_ratings,
    stock_available,
    sold_quantity,
    additional_info,
    product_status,
  } = product_data;

  const { regular_price, sale_price } = prices;

  const [qty, setQty] = useState(1);
  return (
    <>
      <div id="product_card">
        <div id="card_header">
          <div id="stock_slae_badge">
            <div id="sale_badge">15%</div>
            <div id="stock_status_sign"></div>
          </div>
          <div id="product_thumbnail">
            <Image src={thumbnail} alt="product_thumbnail" />
          </div>
        </div>
        <div id="card_body">
          <h3 id="product_title">{title}</h3>
          <h5 id="stock_status">
            <BsCheckCircleFill />
            &nbsp;&nbsp;<strong id="stronger">{product_status}</strong>&nbsp;
            <span style={{ color: "#666" }}> - 1 kg</span>
          </h5>
          <div id="product_price">
            <span id="regular_price">৳ {regular_price}</span>
            <span id="sale_price">৳ {sale_price}</span>
          </div>
        </div>
        <div id="card_action">
          <div id="add_to_cart_area">
            <button id="btn qty_controller" onClick={() => setQty(qty - 1)}>
              -
            </button>
            <span id="cart_qty">{qty}</span>
            <button id="btn qty_controller" onClick={() => setQty(qty + 1)}>
              +
            </button>
          </div>
          <div id="add_to_cart_btn">
            <button id="btn cart_btn">
              <AiOutlineShoppingCart /> &nbsp; Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
