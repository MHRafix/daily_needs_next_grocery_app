import { incrementCartQty } from "../redux/cart_products/action";

export const handleAddToCart = (
  selected_product,
  stock_available,
  dispatch
) => {
  if (stock_available > 0) {
    dispatch(incrementCartQty({ ...selected_product, quantity: 1 }));
  } else {
    alert("This product is alredy sold out!");
  }
};
