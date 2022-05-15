import React from "react";
import TableBody from "./TableBody";

export default function CartTable({ carted_products }) {
  return (
    <div className="cart_table">
      <div className="table_full">
        <div className="table_head">
          <div className="table_head_item">Image</div>
          <div className="table_head_item">Title</div>
          <div className="table_head_item">Price</div>
          <div className="table_head_item">Quantity</div>
          <div className="table_head_item">Subtotal</div>
          <div className="table_head_item">Remove</div>
        </div>
        {carted_products?.map((products) => (
          <TableBody key={products._id} carted_products={products} />
        ))}
      </div>
    </div>
  );
}
