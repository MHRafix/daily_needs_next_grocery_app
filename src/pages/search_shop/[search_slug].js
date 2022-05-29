import { useRouter } from "next/router";
import React from "react";
import Product from "../../../models/Products";
import LayoutContainer from "../../components/commons/layout/LayoutContainer";
import SearchShopMain from "../../components/search_shop/SearchShopMain";
import db from "../../utilities/database";

export default function SearchProduct({ matched_products }) {
  const router = useRouter();
  const { search_slug } = router.query;
  const bread_string = `Categories / ${search_slug}`;
  return (
    <>
      <LayoutContainer
        title="Category Shop"
        description="This is category shop page of 'Daily Needs Grocery'"
      >
        <SearchShopMain
          bread_string={bread_string}
          searched_products={matched_products}
        />
      </LayoutContainer>
    </>
  );
}

// get searched product serverSideprops
// export async function getServerSideProps(context) {
//   // selected prodcut unique id
//   const { params } = context;
//   const { search_slug } = params;

//   // req for all prodcuts
//   const res = await fetch(`${process.env.ROOT_URI}/api/allproducts`);
//   const products = await res.json();

//   // filter searched products which is selected

//   const matched_product = products.filter((product) =>
//     product.title.toLowerCase().includes(search_slug.toLowerCase())
//   );
//   // return the filtered products here
//   return { props: { matched_product } };
// }

export async function getServerSideProps(context) {
  const { params } = context;
  const { search_slug } = params;

  await db.connect();
  const products = await Product.find({}).lean();
  const matched_products = products.filter((product) =>
    product.title.toLowerCase().includes(search_slug.toLowerCase())
  );
  await db.disconnect();
  return {
    props: {
      matched_products: matched_products.map(db.convertDocToObj),
    },
  };
}
