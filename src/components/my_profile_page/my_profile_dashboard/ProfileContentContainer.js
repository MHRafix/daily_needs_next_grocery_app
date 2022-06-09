import Cookie from "js-cookie";
import { useRouter } from "next/router";
import React from "react";
import ProfileNavigation from "./ProfileNavigation";
export default function ProfileContentContainer({ children }) {
  const router = useRouter();

  const userInfo =
    Cookie.get("user_information") &&
    JSON.parse(Cookie.get("user_information"));

  if (!userInfo?.user_email) {
    router.push("/my_account/my_acc");
  }
  return (
    <div className="md:flex shadow-lg border border-slate-300 md:h-screen">
      <div className="my_profile_navigation">
        <ProfileNavigation />
      </div>
      <div className="my_profile_content_body">{children}</div>
    </div>
  );
}
