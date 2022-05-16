import React from "react";
import LayoutContainer from "../../components/commons/layout/LayoutContainer";
import ShopPageMain from "../../components/shop_page/ShopPageMain";

export default function ShopPage() {
  return (
    <>
      <LayoutContainer
        title="Shop"
        description="This is shop page of 'Daily Needs Grocery'"
      >
        <ShopPageMain />
      </LayoutContainer>
    </>
  );
}
