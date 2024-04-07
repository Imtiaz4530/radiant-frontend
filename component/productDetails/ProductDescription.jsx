"use client";
import { Box, Button, Typography } from "@mui/material";

import styles from "@/styles/productDetails.module.css";
import ProductImageSlider from "@/component/productDetails/ProductImageSlide";
import SimpleButton from "@/component/reusable/Button";
import {
  useAddToCart,
  useCheckProductAlreadyInCart,
  useQuantityCheck,
} from "@/hooks/useCart";
import { useState } from "react";

const ProductDescription = ({ data }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const { handleCart } = useAddToCart(data, selectedColor);
  const { quntity } = useQuantityCheck(data?.variation);
  const { itemInCart } = useCheckProductAlreadyInCart(data);

  const handleColorClick = (color, variantQuantity, productQuantity) => {
    if (productQuantity) {
      if (productQuantity > variantQuantity) {
        setSelectedColor(color);
      }
    } else if (variantQuantity > 0) {
      setSelectedColor(color);
    }
  };

  const getItemQuantity = (color) => {
    const selectedItem = itemInCart.find((item) => item.color === color);
    const variantQuantity = selectedItem ? selectedItem.quantity : 0;
    const productQuantity = selectedItem ? selectedItem.productQuantity : 0;

    return { variantQuantity, productQuantity };
  };

  let discountPrice;
  if (data?.discount) {
    discountPrice = Math.round(
      data?.price - data?.price * (data?.discount / 100)
    );
  }

  return (
    <Box className={styles.productDetails}>
      <Box className={styles.productDetails_image}>
        <ProductImageSlider images={data?.productImages} />
      </Box>
      <Box className={styles.productDetails_details}>
        <Typography variant="h4" className={styles.productDetails_title}>
          {data?.title}
        </Typography>
        <Typography
          variant="h5"
          textAlign={"center"}
          className={styles.productDetails_price}
        >
          {data?.discount ? (
            <>
              Sale Price: {discountPrice}.00{" "}
              <span className={styles.productDetails_discountPrice}>
                {data?.price}.00
              </span>
            </>
          ) : (
            `Price: ${data?.price}.00`
          )}
        </Typography>

        {/* COLOR */}
        <Box className={styles.productDetails_colorContainer}>
          {data.variation.map((item) => (
            <Box
              key={item.id}
              className={`${styles.productDetails_colorSelected} ${
                selectedColor === item.color ? styles.selected : ""
              }`}
              onClick={
                itemInCart.length > 0 &&
                itemInCart.filter((item2) => item2.color === item.color)
                  .length > 0
                  ? () =>
                      handleColorClick(
                        item.color,
                        getItemQuantity(item.color).variantQuantity,
                        getItemQuantity(item.color).productQuantity
                      )
                  : () => handleColorClick(item.color, item.quantity)
              }
            >
              <Box
                className={styles.productDetails_color}
                sx={{ backgroundColor: item.colorCode }}
              ></Box>
            </Box>
          ))}
        </Box>

        {/* BUTTONS */}
        <SimpleButton
          variant={"outlined"}
          value={"ADD TO CART"}
          className={styles.productDetails_cartBTN}
          onClick={handleCart}
          disabled={!quntity}
        />

        <Button variant="contained" className={styles.productDetails_orderBTN}>
          BUY NOW
          <Typography
            variant="body2"
            className={styles.productDetails_instantOrderBTN}
          >
            INSTANT DISCOUNT WITH ANY CREDIT CARDS
          </Typography>
        </Button>

        {/* CUPPON */}
        <Typography variant="h6" className={styles.productDetails_cuppon}>
          Use Code SALE10 and avail Flat 10% off.
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductDescription;

{
  /* <Box
              key={item.id}
              className={`${styles.productDetails_colorSelected} ${
                selectedColor === item.color ? styles.selected : ""
              }`}
              onClick={() => handleColorClick(item.color, item.quantity)}
            >
              <Box
                className={styles.productDetails_color}
                sx={{ backgroundColor: item.colorCode }}
              ></Box>
            </Box> */
}
