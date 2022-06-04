import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function FilterCard({ filter_type, data }) {
  const router = useRouter();
  const { filter_slug } = router.query;

  return (
    <NextLink href={`/${filter_type}/${data?.filter_name}`} passHref>
      <div id="category_wrapper">
        {filter_slug === data?.filter_name ? (
          <input type="checkbox" id="category_input" defaultChecked />
        ) : (
          <input type="checkbox" id="category_input" />
        )}
        &nbsp;&nbsp;
        <span className="text-thin">{data?.filter_name}</span>
      </div>
    </NextLink>
  );
}
