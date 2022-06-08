import Cookie from "js-cookie";
import { incrementCartQty } from "../redux/cart_products/action";

export const handleAddToCart = (selected_product, dispatch, qty) => {
  const isExist =
    Cookie.get("cart_products") && JSON.parse(Cookie.get("cart_products"));
  if (isExist) {
    // Cookie.get("cart_products") && Cookie.remove("cart_products");
    const all = [...isExist, { ...selected_product, quantity: qty }];
    Cookie.set("cart_products", JSON.stringify(all));
    console.log("up", all);
  } else {
    Cookie.set(
      "cart_products",
      JSON.stringify([{ ...selected_product, quantity: qty }], {
        expires: 30, // 30 days
        secure: true,
        sameSite: "strict",
        path: "/",
      })
    );
    console.log("add");
  }

  dispatch(incrementCartQty({ ...selected_product, quantity: qty }));
};
