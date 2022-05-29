import { useRouter } from "next/router";
import React from "react";
import Product from "../../../models/Products";
import CategoryShopMain from "../../components/category_shop/CategoryShopMain";
import LayoutContainer from "../../components/commons/layout/LayoutContainer";
import db from "../../utilities/database";

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
// export async function getServerSideProps(context) {
//   // selected prodcut unique id
//   const { params } = context;
//   const { cat_slug } = params;

//   // req for all prodcuts
//   const res = await fetch(`${process.env.ROOT_URI}/api/allproducts`);
//   const products = await res.json();

//   // filter category products which is selected
//   const matched_product = products.filter(
//     (product) => product.category === cat_slug
//   );
//   // return the filtered products here
//   return { props: { matched_product } };
// }

export async function getServerSideProps(context) {
  const { params } = context;
  const { cat_slug } = params;

  await db.connect();
  const products = await Product.find({ category: cat_slug }).lean();
  await db.disconnect();
  return {
    props: {
      product: products.map(db.convertDocToObj),
    },
  };
}
