export const addToCartProducts = {
  ADD_TO_CART: "ADD_TO_CART",
};

export const incrementCartQty = (product) => {
  return { type: addToCartProducts.ADD_TO_CART, payload: product };
};
