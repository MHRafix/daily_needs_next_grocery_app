import Cookie from "js-cookie";
import { useDispatch } from "react-redux";
import Product from "../../models/Products";
import LayoutContainer from "../components/commons/layout/LayoutContainer";
import HomeMain from "../components/home_page/HomeMain";
import { reduceCookie } from "../redux/cart_products/action";
import db from "../utilities/database";

export default function Home({ products }) {
  const dispatch = useDispatch();
  const isExist =
    Cookie.get("cart_products") && JSON.parse(Cookie.get("cart_products"));
  if (isExist) {
    console.log(isExist);
    dispatch(reduceCookie(isExist));
  }
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

/**
 *
 * direct find from database
 *
 **/

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

// export async function getServerSideProps() {
//   const res = await fetch(`${process.env.ROOT_URI}/api/allproducts`);
//   const products = await res.json();

//   return { props: { products } };
// }
