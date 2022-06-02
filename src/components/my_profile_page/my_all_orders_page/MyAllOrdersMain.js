import Cookie from "js-cookie";
import React from "react";
import Breadcrumb from "../../commons/Breadcrumb/Breadcrumb";
import ProfileContentBody from "../my_profile_dashboard/ProfileContentBody";
import ProfileContentContainer from "../my_profile_dashboard/ProfileContentContainer";
export default function MyAllOrdersMain() {
  // breadcrunb navigation
  const userInfo =
    Cookie.get("user_information") &&
    JSON.parse(Cookie.get("user_information"));

  if (userInfo?.user_name) {
    var bread_string = `My Profile/${userInfo?.user_name}/manage orders`;
  }

  return (
    <>
      <Breadcrumb bread_nav={bread_string} />
      <ProfileContentContainer>
        <ProfileContentBody />
      </ProfileContentContainer>
    </>
  );
}
