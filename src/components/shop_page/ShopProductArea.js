import React, { useState } from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import ErrorMessage from "../../utilities/ErrorMessage";
import ProductCard from "../../utilities/ProductCard";

export default function ShopProductArea({ products_data }) {
  const [grid, setGrid] = useState(true);
  // error page
  if (!products_data?.length) {
    return <ErrorMessage message="No product found!" />;
  }
  return (
    <div className="shop_product_area">
      <div className="shop_controller">
        <div className="view_type">
          <button
            className={
              grid ? "layout_changer_btn_active" : "layout_changer_btn"
            }
            onClick={() => setGrid(true)}
          >
            <BsFillGridFill />
          </button>
          &nbsp;&nbsp;&nbsp;
          <button
            className={
              !grid ? "layout_changer_btn_active" : "layout_changer_btn"
            }
            onClick={() => setGrid(false)}
          >
            <FaList />
          </button>
        </div>
        <div className="product_sorting">
          <select id="product_sorting">
            <option value="1">Sort by popularity</option>
            <option value="2" selected>
              Sort by latest
            </option>
            <option value="3">Sort by average rating</option>
            <option value="4">Sort by price low to high</option>
            <option value="5">Sort by price high to low</option>
          </select>
        </div>
      </div>
      <div className="shop_products">
        {grid ? (
          <>
            {products_data?.map((product) => (
              <ProductCard key={product._id} product_data={product} />
            ))}
          </>
        ) : (
          "list layout"
        )}
      </div>
    </div>
  );
}
