import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useStoreActions } from "easy-peasy";

import styles from "@/styles/order.module.css";
import SimpleButton from "../reusable/Button";
import { useCalculateSubtotal } from "@/hooks/useCart";
import { createOrder } from "@/utils/fetchOrder";
import { useProductIds, useProductQuantity } from "@/hooks/useOrder";

const OrderSubtotal = ({ item, profileID }) => {
  const { clearCart } = useStoreActions((action) => action.cart);
  const [error, setError] = useState("");
  const router = useRouter();
  const { total: subTotal } = useCalculateSubtotal(item);
  const total = subTotal + 150;

  const { productIds } = useProductIds(item);
  const { quantity } = useProductQuantity(item);

  const handleOrder = async () => {
    try {
      await createOrder(profileID, productIds, subTotal, total, quantity);
      router.push(`/private/order/greeting`);
      clearCart();
      setError("");
    } catch (e) {
      setError(e?.response?.data?.error?.message);
      console.log(e?.response?.data?.error?.message);
    }
  };

  if (error) {
    return <h6>{error}</h6>;
  }
  return (
    <>
      <Box className={styles.order_summeryAmount}>
        <Box className={styles.order_summerySubtotal}>
          <Box className={styles.order_summerySubtotalAdd}>
            <Typography variant="body2" fontWeight={"bold"}>
              SUBTOTAL
            </Typography>
            <Typography variant="body2">{subTotal}.00</Typography>
          </Box>
          <Box className={styles.order_summerySubtotalAdd}>
            <Typography variant="body2" fontWeight={"bold"}>
              DELIVERY CHARGE(COD)
            </Typography>
            <Typography variant="body2"> 150.00</Typography>
          </Box>
        </Box>
      </Box>
      <Box className={styles.order_summeryAmount}>
        <Box className={styles.order_summerySubtotalAdd}>
          <Typography variant="body2" fontWeight={"bold"}>
            TOTAL
          </Typography>
          <Typography variant="body2">BDT. {total}.00</Typography>
        </Box>
      </Box>
      <Box className={styles.order_summeryCOD}>
        <Typography variant="body2" fontWeight={"bold"}>
          Payment must be made after recieving the product.
        </Typography>
      </Box>
      <SimpleButton
        value={"Place Order"}
        variant={"container"}
        className={styles.orderBTN}
        onClick={handleOrder}
        disabled={!profileID}
      />
    </>
  );
};

export default OrderSubtotal;
