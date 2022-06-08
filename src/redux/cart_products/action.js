// cart product increment
export const addToCartProducts = {
  ADD_TO_CART: "ADD_TO_CART",
};

// add cookie to redux
export const addCookieToRedux = {
  ADD_COOKIE_REDUX: "ADD_COOKIE_REDUX",
};

// reduce product from cart action
export const reduceCartProduct = {
  REDUCE_CART_PRODUCT: "REDUCE_CART_PRODUCT",
};

// just qty increament
export const increaseQty = {
  INCREASE_QTY: "INCREASE_QTY",
};

// jus tqty decrease
export const decreaseQty = {
  DECREASE_QTY: "DECREASE_QTY",
};

// cart product increment
export const incrementCartQty = (product) => {
  return { type: addToCartProducts.ADD_TO_CART, payload: product };
};

export const reduceProduct = (_id) => {
  return { type: reduceCartProduct.REDUCE_CART_PRODUCT, payload: _id };
};

// just qty increment
export const qtyIncrease = (_id) => {
  return { type: increaseQty.INCREASE_QTY, payload: _id };
};

// just qty decrement
export const qtyDecrease = (_id) => {
  return { type: decreaseQty.DECREASE_QTY, payload: _id };
};

// add cookie to redux
export const reduceCookie = (dataArray) => {
  return { type: addCookieToRedux.ADD_COOKIE_REDUX, payload: dataArray };
};
