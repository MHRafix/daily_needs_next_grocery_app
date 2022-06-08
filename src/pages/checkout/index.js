import React from "react";
import CheckoutMain from "../../components/checkout_page/CheckoutMain";
import LayoutContainer from "../../components/commons/layout/LayoutContainer";

export default function CheckoutPage() {
  return (
    <>
      <LayoutContainer
        title="Checkout Page"
        description="This is checkout page of 'Daily Needs Grocery' web app."
      >
        <CheckoutMain />
      </LayoutContainer>
    </>
  );
}
