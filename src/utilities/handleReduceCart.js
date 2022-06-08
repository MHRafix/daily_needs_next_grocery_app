import Cookie from "js-cookie";
import { reduceProduct } from "../redux/cart_products/action";

export const handleReduceCart = (id, dispatch) => {
  const cart_cookie_products =
    Cookie.get("cart_product_ids") &&
    JSON.parse(Cookie.get("cart_product_ids"));

  const rest_products = cart_cookie_products.filter(
    (product) => product._id !== id
  );

  Cookie.set("cart_product_ids", JSON.stringify(rest_products));

  dispatch(reduceProduct(id));
};
