import React from "react";
import LayoutContainer from "../../../components/commons/layout/LayoutContainer";
import MyProfileMain from "../../../components/my_profile_page/my_profile_dashboard/MyProfileMain";

export default function Dashboard() {
  return (
    <>
      <LayoutContainer
        title="My Profile"
        description="This is my profile page of 'Daily Needs Grocery' application!"
      >
        <MyProfileMain />
      </LayoutContainer>
    </>
  );
}
