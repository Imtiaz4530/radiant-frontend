"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useStoreState } from "easy-peasy";

import styles from "@/styles/order.module.css";
import { imageLoader } from "@/utils/imageLoader";
import OrderSubtotal from "./OrderSubtotal";

const OrderSummery = ({ profileID }) => {
  const { item } = useStoreState((state) => state.cart);

  return (
    <Box className={styles.order_summery}>
      <Typography variant="body1" textAlign={"center"} fontWeight={"bold"}>
        YOUR ORDER
      </Typography>

      <Box className={styles.order_summeryItems}>
        {item &&
          item.map((item) => (
            <Box key={item.uniqId} className={styles.order_summeryItem}>
              <Box className={styles.order_summeryItemImg}>
                <Image
                  src={item.url}
                  alt="desc"
                  width={75}
                  height={75}
                  loader={imageLoader}
                />
              </Box>
              <Box className={styles.order_summeryItemDesc}>
                <Typography variant="body2">{item.title}</Typography>
                <Typography variant="body2">
                  BDT. {item.price} * {item.quantity}
                </Typography>
              </Box>
            </Box>
          ))}
      </Box>

      <OrderSubtotal item={item} profileID={profileID} />
    </Box>
  );
};

export default OrderSummery;
