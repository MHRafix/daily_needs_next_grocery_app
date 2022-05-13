import NextLink from "next/link";
import React from "react";

export default function Breadcrumb({ bread_nav }) {
  return (
    <div className="breadcrumb_wrapper">
      <NextLink href="/" passHref>
        <span className="home_nav">Home </span>
      </NextLink>
      <span className="rest_all-nav">/ {bread_nav}</span>
    </div>
  );
}
