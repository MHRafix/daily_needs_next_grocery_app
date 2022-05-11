import Image from "next/image";
import React from "react";

export default function CategoryCard({ category_data }) {
  const { cat_name, cat_image, cat_items } = category_data;
  return (
    <div className="category_card_wrapper">
      <div className="category_image">
        <Image
          className="catImg"
          src={cat_image}
          alt="category_image"
          width={80}
          height={80}
        />
      </div>
      <div className="cat_det">
        <h1 className="cat_name">{cat_name.slice(0, 20)}</h1>
        <p className="cat_items_qty">{cat_items} &nbsp; Items</p>
      </div>
    </div>
  );
}
