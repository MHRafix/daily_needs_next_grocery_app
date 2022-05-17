import { incrementCartQty } from "../redux/cart_products/action";

export const handleAddToCart = (selected_product, dispatch, qty) => {
  dispatch(incrementCartQty({ ...selected_product, quantity: qty }));
};
