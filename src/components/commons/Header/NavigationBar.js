import NextLink from "next/link";
import React from "react";
import { header_navigation } from "../../../fake_data/all_fakedata";

export default function NavigationBar() {
  return (
    <div
      className="navigation_wrapper"
      style={{ borderBottom: "1px solid #eee" }}
    >
      <div className="container_wrapper">
        <div className="navbars">
          {header_navigation.map((link) => (
            <NextLink key={link._id} href={link.href} passHref>
              <span className="!capitalize !mx-3 cursor-pointer tracking-wider">
                {link.menu_name}
              </span>
            </NextLink>
          ))}
        </div>
      </div>
    </div>
  );
}
