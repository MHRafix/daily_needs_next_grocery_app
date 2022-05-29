import Image from "next/image";
import NextLink from "next/link";
import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { handleAddToCart } from "../utilities/handleCart";

export default function ProductCard({ product_data }) {
  const {
    _id,
    slug,
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
  const dispatch = useDispatch();
  const { regular_price, sale_price } = prices;

  const [qty, setQty] = useState(1);
  return (
    <>
      <div id="product_card">
        <div id="card_header">
          <div id="stock_slae_badge">
            <div id="sale_badge">15%</div>
            {stock_available > 0 ? (
              <div id="stock_status_green"></div>
            ) : (
              <div id="stock_status_red"></div>
            )}
          </div>
          <NextLink href={`/shop/singleProducts/${slug}`} passHref>
            <div id="product_thumbnail">
              <Image src={thumbnail} alt="product_thumbnail" />
            </div>
          </NextLink>
        </div>
        <div id="card_body">
          <NextLink href={`/shop/singleProducts/${slug}`} passHref>
            <h3 id="product_title">{title}</h3>
          </NextLink>
          <h5 id="stock_status">
            <BsCheckCircleFill />
            &nbsp;&nbsp;<strong id="stronger">{product_status}</strong>&nbsp;
            <span style={{ color: "#666" }}> - 1 kg</span>
          </h5>
          <div id="product_price">
            <span id={sale_price !== 0 ? "regular_price" : "sale_price"}>
              ৳ {regular_price}
            </span>

            {sale_price !== 0 && <span id="sale_price">৳ {sale_price}</span>}
          </div>
        </div>
        <div id="card_action">
          <div id="add_to_cart_area">
            <button id="qty_controller" onClick={() => setQty(qty - 1)}>
              -
            </button>
            <span id="cart_qty">{qty}</span>
            <button id="qty_controller" onClick={() => setQty(qty + 1)}>
              +
            </button>
          </div>
          <div id="add_to_cart_btn">
            {stock_available > 0 ? (
              <button
                id="cart_btn"
                onClick={() => handleAddToCart(product_data, dispatch, qty)}
              >
                <MdOutlineShoppingCart /> &nbsp; Add to cart
              </button>
            ) : (
              <NextLink href={`/shop/singleProducts/${_id}`} passHref>
                <button id="cart_btn">Read more</button>
              </NextLink>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
