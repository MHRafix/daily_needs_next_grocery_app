import React from "react";
import LayoutContainer from "../../components/commons/layout/LayoutContainer";
import ShopPageMain from "../../components/shop_page/ShopPageMain";

export default function ShopPage({ products }) {
  return (
    <>
      <LayoutContainer
        title="Shop"
        description="This is shop page of 'Daily Needs Grocery'"
      >
        <ShopPageMain products_data={products} />
      </LayoutContainer>
    </>
  );
}

// get shop products from the server
export async function getServerSideProps() {
  const res = await fetch(`${process.env.ROOT_URI}/api/getProducts`);
  const products = await res.json();

  // Pass data to the page via props
  return { props: { products } };
}
