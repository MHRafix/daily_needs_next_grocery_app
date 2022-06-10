import NextLink from "next/link";
import React from "react";

export default function CheckoutTable({ carted_products }) {
  let total_amount = 0;

  if (carted_products) {
    for (const products of carted_products) {
      total_amount =
        products?.prices?.sale_price > 0
          ? total_amount + products?.prices?.sale_price * products?.quantity
          : total_amount + products?.prices?.regular_price * products?.quantity;
    }
  }

  return (
    <div className="checkout_table_wrapper">
      <div className="checkout_table_title">Cart Totals</div>
      <div className="checkout_table">
        <div className="table_checkout">
          <div className="table_head_check">
            <div className="table_head_check_item">Subtotal</div>
            <div className="table_head_check_item1">
              ৳ {total_amount.toFixed(2)}
            </div>
          </div>
          <div className="table_head_check">
            <div className="table_head_check_item">Shipping</div>
            <div className="table_head_check_item1">
              <h1 className="shipping_calculate">
                ৳ {((total_amount / 100) * 3).toFixed(2)}
              </h1>
              <button className="text-info_color tracking-wide">Address</button>
            </div>
          </div>
          <div className="table_head_check">
            <div className="table_head_check_item">Total</div>
            <div className="table_head_check_item1">
              <h1 className="shipping_calculate font-semibold tracking-wider">
                ৳ {(total_amount + (total_amount / 100) * 3).toFixed(2)}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="grid_layout layout_two">
        <div className="lg:flex justify-end items-center">
          <input
            type="text"
            className="p-extra_padding3 mt-4 rounded-sm outline-none border border-slate-300 lg:!w-2/4 !w-full"
            placeholder="Enter coupon code..."
          />
          &nbsp;&nbsp;
          <button
            id="cart_btn"
            className="!rounded-sm !ml-0 !py-1 lg:!w-1/4 !w-full lg:!mt-4 !mt-0"
          >
            Apply Coupon
          </button>
        </div>
        <div className="checkout_btn ml-auto !mt-0 !w-full">
          <NextLink href="/checkout" passHref>
            <button id="cart_btn" className="!rounded-sm !ml-0 !py-1 !w-full">
              PROCEED TO CHECKOUT
            </button>
          </NextLink>
        </div>
      </div>
    </div>
  );
}
