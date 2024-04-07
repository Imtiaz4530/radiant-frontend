import { persist, action } from "easy-peasy";

const cartModel = persist({
  item: [],

  addToCart: action((state, payload) => {
    state.item.unshift(payload);
  }),

  updateQuantity: action((state, payload) => {
    const productIndex = state.item.findIndex(
      (item) => item.uniqId === payload.id
    );

    if (productIndex !== -1) {
      state.item[productIndex].quantity = payload.quantity;
    }
  }),

  removeFromCart: action((state, payload) => {
    const itemRemove = state.item.findIndex((item) => item.uniqId === payload);

    if (itemRemove !== -1) {
      state.item.splice(itemRemove, 1);
    }
  }),

  clearCart: action((state, payloa) => {
    state.item = [];
  }),
});

export default cartModel;
