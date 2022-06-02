import NextLink from "next/link";
import React from "react";

export default function Breadcrumb({ bread_nav }) {
  return (
    <div className="breadcrumb_wrapper">
      <NextLink href="/" passHref>
        <span className="home_nav">Home </span>
      </NextLink>
      <span className="tracking-wider capitalize">/ {bread_nav}</span>
    </div>
  );
}
