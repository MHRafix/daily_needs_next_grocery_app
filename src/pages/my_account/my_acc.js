import React from "react";
import LayoutContainer from "../../components/commons/layout/LayoutContainer";
import MyaccMain from "../../components/my_account_page/MyaccMain";

export default function MyAccount() {
  return (
    <>
      <LayoutContainer
        title="My Account"
        description="This is my account page of 'Daily Need'"
      >
        <MyaccMain />
      </LayoutContainer>
    </>
  );
}
