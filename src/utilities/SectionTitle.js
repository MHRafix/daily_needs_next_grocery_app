import NextLink from "next/link";
import React from "react";

export default function SectionTitle({ section_title, percentage, link_href }) {
  return (
    <>
      <h3 className="section_title">
        {section_title}
        <span className="sale_percentage"> {percentage} OFF</span>
      </h3>
      <NextLink href={link_href} passHref>
        <button id="view_btn">view all</button>
      </NextLink>
    </>
  );
}
