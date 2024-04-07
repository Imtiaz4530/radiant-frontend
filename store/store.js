const { createStore } = require("easy-peasy");

import cartModel from "./cartModel";

const store = createStore({ cart: cartModel });

export default store;
