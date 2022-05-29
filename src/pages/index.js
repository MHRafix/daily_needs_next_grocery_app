import Product from "../../models/Products";
import LayoutContainer from "../components/commons/layout/LayoutContainer";
import HomeMain from "../components/home_page/HomeMain";
import db from "../utilities/database";

export default function Home({ products }) {
  return (
    <>
      <LayoutContainer
        title="Organic Food and Grocery"
        description="This is home page of 'Daily Needs Grocery'"
      >
        <HomeMain sale_products={products} />
      </LayoutContainer>
    </>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch(`${process.env.ROOT_URI}/api/allproducts`);
//   const products = await res.json();

//   // Pass data to the page via props
//   return { props: { products } };
// }

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
