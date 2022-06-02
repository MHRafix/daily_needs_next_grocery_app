import React from "react";
import ProfileNavigation from "./ProfileNavigation";

export default function ProfileContentContainer({ children }) {
  return (
    <div className="md:flex sm:!grid shadow-lg rounded-md">
      <div className="my_profile_navigation">
        <ProfileNavigation />
      </div>
      <div className="my_profile_content_body">{children}</div>
    </div>
  );
}
