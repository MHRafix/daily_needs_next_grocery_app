import React from "react";
import LayoutContainer from "../../../components/commons/layout/LayoutContainer";
import SignleProductMain from "../../../components/single_product/SignleProductMain";

export default function SingleProduct(props) {
  // single product destructure from the props
  const { single_product } = props;

  // bread cruimb navigation making here
  const bread_string = `${single_product?.category} / ${single_product?.title}`;

  return (
    <>
      <LayoutContainer
        title={single_product?.title}
        description={`This is single product page of ${single_product?.title} of Daily Needs Grocery`}
      >
        <SignleProductMain
          bread_string={bread_string}
          single_product={single_product}
        />
      </LayoutContainer>
    </>
  );
}

// get single product serverSideprops
export async function getServerSideProps(context) {
  // selected prodcut unique id
  const { params } = context;
  const { _id } = params;

  // req for all prodcuts
  const res = await fetch(`${process.env.ROOT_URI}/api/allproducts`);
  const products = await res.json();

  // find single one which is selected
  const single_product = products.find((product) => product._id === _id);

  // return the selected product here
  return { props: { single_product } };
}
