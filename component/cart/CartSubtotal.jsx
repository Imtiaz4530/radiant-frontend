"use client";
import { Box, Typography } from "@mui/material";
import styles from "@/styles/cartDrawer.module.css";
import SimpleButton from "../reusable/Button";
import { useCalculateSubtotal } from "@/hooks/useCart";
import { useIsLoggedIn } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

const CartSubtotal = ({ item, toggleDrawer }) => {
  const { total } = useCalculateSubtotal(item);
  const { logged } = useIsLoggedIn();

  const router = useRouter();

  const handleCheckout = () => {
    toggleDrawer(false);
    router.push("/private/order");
  };

  return (
    <Box className={styles.cart_lower}>
      <Box className={styles.cart_lowerSubtotal}>
        <Typography className={styles.cart_lowerSubtotalText}>
          SUBTOTAL
        </Typography>
        <Typography className={styles.cart_lowerSubtotalNum}>
          BDT. {total}.00
        </Typography>
      </Box>
      <Typography className={styles.cart_lowerPolicy}>
        Shipping, taxes, and discount codes calculated at checkout.
      </Typography>
      <SimpleButton
        className={styles.cart_lowerCheckoutBTN}
        value={"CHECKOUT"}
        variant={"contained"}
        disabled={!logged}
        onClick={handleCheckout}
      />
    </Box>
  );
};

export default CartSubtotal;
