import { useRouter } from "next/router";
import React from "react";
import Product from "../../../models/Products";
import FilteredShopMain from "../../components/filter_shop/FilteredShopMain";
import LayoutContainer from "../../components/commons/layout/LayoutContainer";
import db from "../../utilities/database";

export default function CategoryShop({ matched_products }) {
  const router = useRouter();
  const { filter_slug } = router.query;
  const bread_string = `Categories / ${filter_slug}`;
  return (
    <>
      <LayoutContainer
        title="Category Shop"
        description="This is category shop page of 'Daily Needs Grocery'"
      >
        <FilteredShopMain
          bread_string={bread_string}
          filtered_products={matched_products}
        />
      </LayoutContainer>
    </>
  );
}

// get category product serverSideprops
// export async function getServerSideProps(context) {
//   // selected prodcut unique id
//   const { params } = context;
//   const { filter_slug } = params;

//   // req for all prodcuts
//   const res = await fetch(`${process.env.ROOT_URI}/api/allproducts`);
//   const products = await res.json();

//   // filter category products which is selected
//   const matched_products = products.filter(
//     (product) => product.category === filter_slug
//   );
//   // return the filtered products here
//   return { props: { matched_products } };
// }

export async function getServerSideProps(context) {
  const { params } = context;
  const { filter_slug } = params;

  await db.connect();
  const matched_products = await Product.find({ category: filter_slug }).lean();
  await db.disconnect();
  return {
    props: {
      matched_products: matched_products.map(db.convertDocToObj),
    },
  };
}
