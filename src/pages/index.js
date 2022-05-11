import LayoutContainer from "../components/commons/layout/LayoutContainer";
import HomeMain from "../components/home_page/HomeMain";

export default function Home() {
  return (
    <>
      <LayoutContainer description="This is home page of 'Daily Needs Grocery'">
        <HomeMain />
      </LayoutContainer>
    </>
  );
}
