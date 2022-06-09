import Cookie from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { profile_navigation } from "../../../fake_data/all_fakedata";
import UserPic from "../../../images/logo/1642355899259.jpg";
import ProfileNav from "../../../utilities/ProfileNav";

export default function ProfileNavigation() {
  // breadcrunb navigation
  const userInfo =
    Cookie.get("user_information") &&
    JSON.parse(Cookie.get("user_information"));

  // prevent fake user
  const router = useRouter();

  // handle logout and remove user information cookie from the browser
  const handleLogout = () => {
    Cookie.remove("user_information");
    Cookie.remove("user_verify");
    router?.push("/my_account/my_acc");
  };

  return (
    <div className="profile_details_wrapper">
      <div className="profile_details">
        <Image
          className="rounded-full my-5"
          src={UserPic}
          alt="Profile Picture"
          width={90}
          height={90}
        />
        <h3 className="text-deep_cyan font-semibold tracking-wide text-normal">
          {userInfo?.user_name}
        </h3>
        <button
          className="!text-sm tracking-wide"
          id="cart_btn"
          onClick={handleLogout}
        >
          Logout Now
        </button>
      </div>
      <div className="profile_navigation_wrapper">
        {profile_navigation.map((nav) => (
          <ProfileNav key={nav._id} menu_data={nav} />
        ))}
      </div>
    </div>
  );
}
