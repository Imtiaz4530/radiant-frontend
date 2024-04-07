import { Box, Drawer, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import styles from "@/styles/cartDrawer.module.css";
import CartContainer from "./cartContainer";
import { useStoreState } from "easy-peasy";
import CartSubtotal from "./CartSubtotal";

const CartDrawer = ({ state, toggleDrawer }) => {
  const { item } = useStoreState((state) => state.cart);

  const list = (
    <Box
      className={styles.cart_container}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <Box className={styles.cart_upper}>
        <Typography variant="h2" className={styles.cart_upperText}>
          Cart
        </Typography>
        <Close
          className={styles.cart_upperIcon}
          onClick={toggleDrawer(false)}
        />
      </Box>

      {item.length === 0 ? (
        <Typography
          variant="h6"
          display={"flex"}
          justifyContent={"center"}
          marginTop={10}
        >
          Your Cart Is Currently Empty!
        </Typography>
      ) : (
        <>
          {" "}
          <CartContainer item={item} />
          <CartSubtotal toggleDrawer={toggleDrawer} item={item} />
        </>
      )}
    </Box>
  );

  return (
    <div>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </div>
  );
};

export default CartDrawer;
