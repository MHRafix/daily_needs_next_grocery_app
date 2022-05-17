import { useRouter } from "next/router";
import React from "react";
import CategoryShopMain from "../../components/category_shop/CategoryShopMain";
import LayoutContainer from "../../components/commons/layout/LayoutContainer";

export default function CategoryShop() {
  const router = useRouter();
  const { cat_slug } = router.query;
  const bread_string = `Categories / ${cat_slug}`;
  return (
    <>
      <LayoutContainer
        title="Category Shop"
        description="This is category shop page of 'Daily Needs Grocery'"
      >
        <CategoryShopMain bread_string={bread_string} slug={cat_slug} />
      </LayoutContainer>
    </>
  );
}
