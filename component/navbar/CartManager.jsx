import { useState } from "react";
import { Badge } from "@mui/material";
import { ShoppingBasketOutlined } from "@mui/icons-material";
import CartDrawer from "../cart/CartDrawer";

const CartManager = ({ item }) => {
  const [state, setState] = useState({
    right: false,
  });
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, right: open });
  };
  return (
    <Badge badgeContent={item.length} color="error">
      <ShoppingBasketOutlined onClick={toggleDrawer(true)} />
      <CartDrawer toggleDrawer={toggleDrawer} state={state} />
    </Badge>
  );
};

export default CartManager;
