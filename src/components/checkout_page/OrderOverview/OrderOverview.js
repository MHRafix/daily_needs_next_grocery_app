import React from "react";
import { useSelector } from "react-redux";
import OrderProduct from "./OrderProduct";

export default function OrderOverview() {
  const carted_products = useSelector((state) => state.cart_product.cart_list);

  return (
    <div className="cart_table">
      <div className="table_full">
        <div className="flex border-b-1 border-slate-200 py-1">
          <div className="text-black2 text-normal tracking-wider font-semibold w-4/6">
            Product Details
          </div>
          <div className="text-black2 text-normal tracking-wider font-semibold w-2/6">
            Subtotal
          </div>
        </div>
        <div>
          {carted_products?.map((product) => (
            <OrderProduct key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
