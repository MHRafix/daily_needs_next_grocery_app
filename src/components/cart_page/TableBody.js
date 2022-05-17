import Image from "next/image";
import React, { useState } from "react";

export default function TableBody({ carted_products }) {
  const { thumbnail, title, prices, quantity } = carted_products;
  // console.log(carted_products);
  const [qty, setQty] = useState(quantity);

  return (
    <div className="table_body">
      <div className="table_body_item">
        <Image
          src={thumbnail}
          alt="carted items thumbnail"
          width={80}
          height={80}
        />
      </div>
      <div className="table_body_item">
        <h3 className="text-light text-black3">{title}</h3>
      </div>
      <div className="table_body_item">$ {prices.sale_price}</div>
      <div className="table_body_item">
        <div id="add_to_cart_area">
          <button id="qty_controller" onClick={() => setQty(qty - 1)}>
            -
          </button>
          <span id="cart_qty">{qty}</span>
          <button id="qty_controller" onClick={() => setQty(qty + 1)}>
            +
          </button>
        </div>
      </div>
      <div className="table_body_item">$ {prices.sale_price * qty}</div>
      <div className="table_body_item">
        <span className="bg-red-500 text-white cursor-pointer px-extra_padding3 rounded-full">
          &times;
        </span>
      </div>
    </div>
  );
}
