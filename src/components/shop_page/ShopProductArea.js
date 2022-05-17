import React from "react";
import ProductCard from "../../utilities/ProductCard";

export default function ShopProductArea({ products_data }) {
  return (
    <div className="shop_product_area">
      <div className="shop_controller">shop products controller</div>
      <div className="shop_products">
        {products_data.map((product) => (
          <ProductCard key={product._id} product_data={product} />
        ))}
      </div>
    </div>
  );
}
