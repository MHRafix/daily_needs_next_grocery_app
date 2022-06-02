import React from "react";
import LayoutContainer from "../../../components/commons/layout/LayoutContainer";
import MyAllOrdersMain from "../../../components/my_profile_page/my_all_orders_page/MyAllOrdersMain";

export default function MyAllOrders() {
  return (
    <>
      <LayoutContainer
        title="Manage orders"
        description="This is my all orders page of 'Daily Needs Grocery' web application."
      >
        <MyAllOrdersMain />
      </LayoutContainer>
    </>
  );
}
