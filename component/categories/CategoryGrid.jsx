"use client";
import { Card, Grid, Typography, CardContent } from "@mui/material";
import Image from "next/image";

import styles from "@/styles/categories.module.css";
import useCategories from "@/hooks/useCategories";
import { imageLoader } from "@/utils/imageLoader";
import Loading from "@/component/reusable/loading/GlobalLoading";
import Link from "next/link";

const BasicCard = ({ url, name }) => {
  return (
    <Card sx={{ minWidth: 275, backgroundColor: "#e0e0e0" }}>
      <Link href={`/products?category=${name}`} className="link">
        <CardContent className={styles.content}>
          <Image
            src={url}
            alt={"Category Image"}
            width={280}
            height={280}
            loader={imageLoader}
            className={styles.gridImage}
          />
          <Typography variant="h6" fontWeight={"bold"} color={"black"}>
            {name}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

const CategoryGrid = () => {
  const { catagoriesData, catagoriesLoading, catagoriesError } =
    useCategories();

  if (catagoriesLoading) {
    return <Loading isLoading={catagoriesLoading} />;
  }

  if (catagoriesError) {
    return (
      <Typography variant="h6">
        Error occured! Can not fetch categories.
      </Typography>
    );
  }

  return (
    <Grid container spacing={2} className={styles.gridContainer}>
      {catagoriesData.map((item) => (
        <Grid key={item.id} item xs={12} sm={12} md={6} lg={6} xl={4}>
          <BasicCard url={item.url} name={item.categoryName} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CategoryGrid;
