import { Box, Typography } from "@mui/material";
import Image from "next/image";

import styles from "@/styles/cartDrawer.module.css";
import { imageLoader } from "@/utils/imageLoader";
import CartQuantity from "./CartQuantity";

const CartContainer = ({ item }) => {
  return (
    <Box className={styles.cart_itemsContainer}>
      {item.map((item) => (
        <Box className={styles.cart_item} key={item.uniqId}>
          <Box className={styles.cart_itemImageContainer}>
            <Image
              src={item.url}
              alt="nothing"
              width={100}
              height={100}
              className={styles.cart_itemImage}
              loader={imageLoader}
            />
          </Box>
          <Box className={styles.cart_itemDetails}>
            <Typography variant="h5" className={styles.cart_itemTitle}>
              {item.title}
            </Typography>
            <Typography variant="body2" className={styles.cart_itemColor}>
              Color: <span>{item.color}</span>
            </Typography>
            <Box className={styles.cart_itemPriceQuantity}>
              {/* CART QUANTITY */}
              <CartQuantity
                productQuantity={item?.productQuantity}
                id={item.uniqId}
                curQuantity={item.quantity}
              />

              <Typography variant="body2" className={styles.cart_itemPrice}>
                BDT. {item.price}.00
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CartContainer;
