import { incrementCartQty } from "../redux/cart_products/action";
export const handleAddToCart = (selected_product, dispatch, qty) => {
  // const all_cart_products = [];
  // const prev_cookie_products = [
  //   Cookie.get("cart_products") && JSON.parse(Cookie.get("cart_products")),
  // ];
  // prev_cookie_products.push({ ...selected_product, quantity: qty });

  // if (Cookie.get("cart_products") && JSON.parse(Cookie.get("cart_products"))) {
  //   Cookie.set("cart_products", JSON.stringify(prev_cookie_products), {
  //     expires: 30, // 30 days
  //     secure: true,
  //     sameSite: "strict",
  //     path: "/",
  //   });
  // } else {
  //   Cookie.set(
  //     "cart_products",
  //     JSON.stringify({ ...selected_product, quantity: qty })
  //   );
  // }

  dispatch(incrementCartQty({ ...selected_product, quantity: qty }));
};
