import { useRouter } from "next/router";
import React from "react";
import LayoutContainer from "../../components/commons/layout/LayoutContainer";
import SearchShopMain from "../../components/search_shop/SearchShopMain";

export default function SearchProduct() {
  const router = useRouter();
  const { search_slug } = router.query;
  const bread_string = `Categories / ${search_slug}`;
  return (
    <>
      <LayoutContainer
        title="Category Shop"
        description="This is category shop page of 'Daily Needs Grocery'"
      >
        <SearchShopMain bread_string={bread_string} slug={search_slug} />
      </LayoutContainer>
    </>
  );
}
