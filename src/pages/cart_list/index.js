import React from "react";
import CartPageMain from "../../components/cart_page/CartPageMain";
import LayoutContainer from "../../components/commons/layout/LayoutContainer";

export default function CartPage() {
  return (
    <>
      <LayoutContainer
        title="Cart"
        description={`This is product cart page of Daily Needs Grocery`}
      >
        <CartPageMain />
      </LayoutContainer>
    </>
  );
}
