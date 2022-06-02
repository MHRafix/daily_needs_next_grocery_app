import Cookie from "js-cookie";
import { useRouter } from "next/router";
import React from "react";

export default function ProfileContent() {
  // handle logout and remove user information cookie from the browser
  const router = useRouter();
  const handleLogout = () => {
    Cookie.remove("user_information");
    router.push("/my_account/my_acc");
  };

  return (
    <div>
      <button className="location_pushBtn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
