import Cookie from "js-cookie";
import { useRouter } from "next/router";
import React from "react";
import LayoutContainer from "../../components/commons/layout/LayoutContainer";
import MyaccMain from "../../components/my_account_page/MyaccMain";

export default function MyAccount() {
  const router = useRouter();
  const user_loggedin = Cookie.get("user_information")
    ? JSON.parse(Cookie.get("user_information"))
    : null;
  if (user_loggedin) {
    router.push("/");
  }
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
