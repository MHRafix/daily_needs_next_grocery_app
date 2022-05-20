import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Category({ cat_data }) {
  const router = useRouter();
  const { cat_slug } = router.query;

  return (
    <NextLink href={`/categories/${cat_data?.cat_name}`} passHref>
      <div id="category_wrapper">
        {cat_slug === cat_data?.cat_name ? (
          <input type="checkbox" id="category_input" checked />
        ) : (
          <input type="checkbox" id="category_input" />
        )}
        &nbsp;&nbsp;
        <lebel className="text-thin">{cat_data?.cat_name}</lebel>
      </div>
    </NextLink>
  );
}
