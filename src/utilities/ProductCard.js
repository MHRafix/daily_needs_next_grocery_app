import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function ProductCard() {
  const [qty, setQty] = useState(1);
  return (
    <div className="product_card">
      <div className="card_thumbnail">
        <div className="stock_slae_badge">
          <div className="sale_badge">15%</div>
          <div className="stock_status"></div>
        </div>
        <div className="product_thumbnail">
          <Image src="dfdf" alt="product_thumbnail" />
        </div>
      </div>
      <div className="card_content">
        <div className="product_title_wrapper">
          <h3 className="product_title"></h3>{" "}
          <h5 className="stock_status">In Stock - 1 kg</h5>
        </div>
        <div className="product_price">
          <span className="regular_price">৳12.00</span>
          <span className="sale_price">৳11.00</span>
        </div>
      </div>
      <div className="card_action">
        <div className="add_to_cart_area">
          <button
            className="btn qty_controller"
            onClick={(quantity) => setQty(quantity - 1)}
          >
            -
          </button>
          <span className="cart_qty">{qty}</span>
          <button
            className="btn qty_controller"
            onClick={(quantity) => setQty(quantity + 1)}
          >
            +
          </button>
        </div>
        <div className="add_to_cart_btn">
          <button className="btn cart_btn">
            <AiOutlineShoppingCart /> &nbsp; Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
