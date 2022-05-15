import Image from "next/image";
import React from "react";

export default function TableBody({ carted_products }) {
  const { thumbnail, title, prices } = carted_products;
  return (
    <div className="table_body">
      <div className="table_body_item">
        <Image src={thumbnail} alt="carted items thumbnail" />
      </div>
      <div className="table_body_item">{title}</div>
      <div className="table_body_item">{prices.sale_price}</div>
      <div className="table_body_item">1</div>
      <div className="table_body_item">{prices.sale_price * 1}</div>
      <div className="table_body_item">Remove</div>
    </div>
  );
}
