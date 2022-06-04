import React from "react";
import Product from "../../../models/Products";
import LayoutContainer from "../../components/commons/layout/LayoutContainer";
import SaleProductsShopMain from "../../components/sale_shop_page/SaleProductsShopMain";
import db from "../../utilities/database";

export default function SaleProductsShop({ sale_products }) {
  return (
    <>
      <LayoutContainer
        title="Shop"
        description="This is shop page of 'Daily Needs Grocery'"
      >
        <SaleProductsShopMain products_data={sale_products} />
      </LayoutContainer>
    </>
  );
}

// get shop products from the server
// export async function getServerSideProps() {
//   const res = await fetch(`${process.env.ROOT_URI}/api/allproducts`);
//   const products = await res.json();
//   const sale_products = products.filter(
//     (product) => product.prices.sale_price !== 0
//   );
//   // Pass data to the page via props
//   return { props: { sale_products } };
// }

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  const sale_products = products.filter(
    (product) => product.prices.sale_price !== 0
  );
  await db.disconnect();
  return {
    props: {
      sale_products: products.map(db.convertDocToObj),
    },
  };
}
