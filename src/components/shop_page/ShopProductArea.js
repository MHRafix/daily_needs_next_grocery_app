import Cookie from "js-cookie";
import React, { useState } from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { ErrorMessage } from "../../utilities/AlertMessage";
import GridProductCard from "../../utilities/GridProductCard";
import ListProductCard from "../../utilities/ListProductCard";

export default function ShopProductArea({ products_data }) {
  const layout_status = Cookie.get("layout_changer")
    ? JSON.parse(Cookie.get("layout_changer"))
    : true;

  const [grid, setGrid] = useState(layout_status);

  const handleGridLayout = () => {
    Cookie.set("layout_changer", JSON.stringify(true));
    setGrid(true);
  };

  const handleListLayout = () => {
    Cookie.set("layout_changer", JSON.stringify(false));
    setGrid(false);
  };

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
            onClick={handleGridLayout}
          >
            <BsFillGridFill />
          </button>
          &nbsp;&nbsp;&nbsp;
          <button
            className={
              !grid ? "layout_changer_btn_active" : "layout_changer_btn"
            }
            onClick={handleListLayout}
          >
            <FaList />
          </button>
        </div>
        <div className="product_sorting">
          <select id="product_sorting">
            <option value="1">Sort by popularity</option>
            <option value="2" defaultValue={1}>
              Sort by latest
            </option>
            <option value="3">Sort by average rating</option>
            <option value="4">Sort by price low to high</option>
            <option value="5">Sort by price high to low</option>
          </select>
        </div>
      </div>
      {grid ? (
        <div className="grid_shop_products">
          {products_data?.map((product) => (
            <GridProductCard key={product._id} product_data={product} />
          ))}
        </div>
      ) : (
        <div className="list_shop_products">
          {products_data?.map((product) => (
            <ListProductCard key={product._id} product_data={product} />
          ))}
        </div>
      )}
    </div>
  );
}
