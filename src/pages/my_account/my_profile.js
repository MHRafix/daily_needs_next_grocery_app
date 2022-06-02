import React from "react";
import LayoutContainer from "../../components/commons/layout/LayoutContainer";
import MyProfileMain from "../../components/my_profile_page/MyProfileMain";

export default function my_profile() {
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
