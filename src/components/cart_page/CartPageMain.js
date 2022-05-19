import React from "react";
import { useSelector } from "react-redux";
import Breadcrumb from "../commons/Breadcrumb/Breadcrumb";
import CartTable from "./CartTable";
import CheckoutTable from "./CheckoutTable";

export default function CartPageMain() {
  const carted_products = useSelector((state) => state.cart_product.cart_list);
  if (!carted_products.length) {
    return (
      <div className="flex items-center justify-center">
        <h1 className="text-red-500 text-center text-big font-bold ">
          Cart is empty!
        </h1>
      </div>
    );
  }
  const bread_string = "Cart";
  return (
    <>
      <Breadcrumb bread_nav={bread_string} />
      <CartTable carted_products={carted_products} />
      <CheckoutTable carted_products={carted_products} />
    </>
  );
}
