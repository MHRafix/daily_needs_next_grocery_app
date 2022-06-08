import React from "react";
import Breadcrumb from "../../components/commons/Breadcrumb/Breadcrumb";
import BillingDetails from "./BillingDetails";

export default function CheckoutMain() {
  const bread_string = "checkout";
  return (
    <>
      <Breadcrumb bread_nav={bread_string} />
      <BillingDetails />
    </>
  );
}
