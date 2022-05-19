import { useRouter } from "next/router";
import React from "react";
import LayoutContainer from "../../../components/commons/layout/LayoutContainer";
import SignleProductMain from "../../../components/single_product/SignleProductMain";
import { products_data } from "../../../fake_data/all_fakedata";

export default function SingleProduct() {
  const router = useRouter();
  const { _id } = router.query;
  const single_product = products_data.find(
    (product) => Number(_id) === product._id
  );

  const bread_string = `${single_product?.category} / ${single_product?.title}`;
  if (!single_product) {
    return (
      <div className="flex items-center justify-center">
        <h1 className="text-red-500 text-center text-big font-bold ">
          Product not found!
        </h1>
      </div>
    );
  }
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

// export async function getServerSideProps(context) {
//   const { params } = context;
//   const { _id } = params;

//   await db.connect();
//   const product = await Product.findOne({ slug }).lean();
//   await db.disconnect();
//   return {
//     props: {
//       product: db.convertDocToObj(product),
//     },
//   };
// }
