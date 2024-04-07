"use client";
import {
  Card,
  CardContent,
  Button,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import Image from "next/image";
import { imageLoader } from "@/utils/imageLoader";
import InfoIcon from "@mui/icons-material/Info";

import styles from "../../styles/discountCard.module.css";
import Loading from "./loading/GlobalLoading";
import { useRouter } from "next/navigation";
import { useAddToCart, useQuantityCheck } from "@/hooks/useCart";

const Cards = ({ url, name, price, discount, id, categoryName, data }) => {
  const router = useRouter();
  const discountPrice = Math.round(price - price * (discount / 100));

  const dataa = data.reduce((acc, cur) => {
    if (cur.id === id) {
      acc = { ...cur };
    }
    return acc;
  }, {});
  const { handleCart } = useAddToCart(dataa);
  const { quntity } = useQuantityCheck(dataa?.variation);

  return (
    <Card sx={{ minWidth: 275, backgroundColor: "#e0e0e0" }}>
      <CardContent className={styles.content}>
        <Image
          alt="Product Details"
          src={url}
          loader={imageLoader}
          width={220}
          height={220}
        />
        <Typography variant="h6" fontWeight={"bold"} color="text.secondary">
          {name}
        </Typography>
        <Box className={styles.disCountPriceBox}>
          <Typography variant="body1" color="text.primary">
            {discount ? `BDT. ${discountPrice}.00` : `BDT. ${price}.00`}
          </Typography>
          {discount ? (
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ textDecoration: "line-through" }}
            >
              BDT. {price}.00
            </Typography>
          ) : (
            ""
          )}
        </Box>
        <Box className={styles.btnBox}>
          <Button
            size="small"
            variant="contained"
            className={styles.cartBtn}
            onClick={handleCart}
            disabled={!quntity}
          >
            Add Cart
          </Button>
          <Button
            size="small"
            variant="outlined"
            className={styles.detailBtn}
            onClick={() =>
              router.push(`/products/${id}?category=${categoryName}`)
            }
          >
            Details
            <InfoIcon />
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

const ProductCard = ({ data, loading, error }) => {
  if (loading) {
    return <Loading isLoading={loading} />;
  }

  return (
    <Box className={styles.gridContainer}>
      <Grid container spacing={10} className={styles.gridContainer}>
        {data?.map((item) => (
          <Grid key={item.id} item xs={12} sm={12} md={6} lg={4} xl={3}>
            <Cards
              url={item.displaYImage}
              name={item.name}
              price={item.price}
              discount={item.discount}
              id={item.id}
              categoryName={item.categoryName}
              data={data}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductCard;
