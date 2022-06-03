import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function ProfileNav({ menu_data }) {
  const { href, menu_name, menu_icon } = menu_data;
  const router = useRouter();
  const { asPath } = router;
  const active_path = `/my_account/my_profile${href}`;

  return (
    <NextLink href={`/my_account/my_profile${href}`} passHref>
      <div
        id={
          active_path === asPath ? "profile_nav_active" : "profile_nav_normal"
        }
      >
        {menu_icon} &nbsp; {menu_name}
      </div>
    </NextLink>
  );
}
