import { Box, Typography } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

import styles from "@/styles/cartDrawer.module.css";
import { useQuantityUpdate } from "@/hooks/useCart";

const CartQuantity = ({ productQuantity, id, curQuantity }) => {
  const { handleAddItem, handleRemoveItem } = useQuantityUpdate(
    id,
    productQuantity,
    curQuantity
  );

  return (
    <Box className={styles.cart_itemQuantity}>
      <Remove fontSize="small" onClick={handleRemoveItem} />
      <Typography variant="body2" className={styles.cart_itemQuantityText}>
        {curQuantity}
      </Typography>
      <Add
        fontSize="small"
        onClick={handleAddItem}
        className={
          productQuantity === curQuantity ? `${styles.disabledBTN}` : ""
        }
      />
    </Box>
  );
};

export default CartQuantity;
