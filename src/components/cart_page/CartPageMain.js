import React from "react";
import { useSelector } from "react-redux";
import Breadcrumb from "../commons/Breadcrumb/Breadcrumb";
import CartTable from "./CartTable";
import CheckoutTable from "./CheckoutTable";

export default function CartPageMain() {
  const carted_products = useSelector((state) => state.cart_product.cart_list);
  const bread_string = "Cart";
  return (
    <>
      <Breadcrumb bread_nav={bread_string} />
      <CartTable carted_products={carted_products} />
      <CheckoutTable />
    </>
  );
}
