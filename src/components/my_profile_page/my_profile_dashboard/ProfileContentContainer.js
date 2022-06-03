import React from "react";
import ProfileNavigation from "./ProfileNavigation";

export default function ProfileContentContainer({ children }) {
  return (
    <div className="md:flex shadow-lg border border-slate-300 md:h-screen">
      <div className="my_profile_navigation">
        <ProfileNavigation />
      </div>
      <div className="my_profile_content_body">{children}</div>
    </div>
  );
}
