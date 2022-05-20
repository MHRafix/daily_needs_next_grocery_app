import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import cart_product from "./cart_products/reducer";

const combinedReducer = combineReducers({
  cart_product,
});

const masterReducer = (state, action) => {
  if (action.types === HYDRATE) {
    const nextState = {
      ...state,
      cartedProducts: {
        cart_product:
          state.cart_product.quantity + action.payload.cart_product.quantity,
      },
      // update_cart: {
      //   updated_cart_list: state.cart_product.quantity,
      // },
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

const initStore = () => {
  return createStore(masterReducer, composeWithDevTools(applyMiddleware()));
};

export const wrapper = createWrapper(initStore);
