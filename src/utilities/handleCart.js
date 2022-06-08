import Cookie from "js-cookie";
import { incrementCartQty } from "../redux/cart_products/action";

export const handleAddToCart = (selected_product, dispatch, qty) => {
  const isExist =
    Cookie.get("cart_product_ids") &&
    JSON.parse(Cookie.get("cart_product_ids"));
  if (isExist) {
    const all = [...isExist, { _id: selected_product._id, quantity: qty }];
    Cookie.set("cart_product_ids", JSON.stringify(all), {
      expires: 10, // 10 days
      secure: true,
      sameSite: "strict",
      path: "/",
    });
  } else {
    Cookie.set(
      "cart_product_ids",
      JSON.stringify([{ _id: selected_product._id, quantity: qty }], {
        expires: 10, // 10 days
        secure: true,
        sameSite: "strict",
        path: "/",
      })
    );
  }

  dispatch(incrementCartQty({ ...selected_product, quantity: qty }));
};
