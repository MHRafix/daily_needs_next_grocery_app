import LayoutContainer from "../components/commons/layout/LayoutContainer";
import HomeMain from "../components/home_page/HomeMain";

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

export async function getServerSideProps() {
  const res = await fetch(`${process.env.ROOT_URI}/api/getProducts`);
  const products = await res.json();

  // Pass data to the page via props
  return { props: { products } };
}
