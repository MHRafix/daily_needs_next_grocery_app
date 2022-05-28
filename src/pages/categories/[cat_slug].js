import { useRouter } from "next/router";
import React from "react";
import CategoryShopMain from "../../components/category_shop/CategoryShopMain";
import LayoutContainer from "../../components/commons/layout/LayoutContainer";

export default function CategoryShop({ matched_product }) {
  const router = useRouter();
  const { cat_slug } = router.query;
  const bread_string = `Categories / ${cat_slug}`;
  return (
    <>
      <LayoutContainer
        title="Category Shop"
        description="This is category shop page of 'Daily Needs Grocery'"
      >
        <CategoryShopMain
          bread_string={bread_string}
          category_products={matched_product}
        />
      </LayoutContainer>
    </>
  );
}

// get category product serverSideprops
export async function getServerSideProps(context) {
  // selected prodcut unique id
  const { params } = context;
  const { cat_slug } = params;

  // req for all prodcuts
  const res = await fetch(`http://localhost:3000/api/getProducts`);
  const products = await res.json();

  // filter category products which is selected
  const matched_product = products.filter(
    (product) => product.category === cat_slug
  );
  // return the filtered products here
  return { props: { matched_product } };
}
