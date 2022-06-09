import React from "react";
import OrderProduct from "./OrderProduct";

export default function OrderOverview({ carted_products }) {
  return (
    <div className="cart_table">
      <div className="table_full">
        <div className="flex bg-slate-100 border-b-1 border-slate-200 py-1">
          <div className="text-black2 text-normal tracking-wider font-semibold w-4/6">
            Product Details
          </div>
          <div className="text-black2 text-normal tracking-wider font-semibold w-2/6">
            Subtotal
          </div>
        </div>
        <div>
          {carted_products.length ? (
            carted_products?.map((product) => (
              <OrderProduct key={product._id} product={product} />
            ))
          ) : (
            <div className="my-5 text-black2 tracking-wide">
              Loading Data....
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
