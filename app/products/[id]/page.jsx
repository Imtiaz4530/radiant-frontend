"use client";
import { useProduct } from "@/hooks/useProducts";
import { Box } from "@mui/material";
import { useParams } from "next/navigation";

import styles from "@/styles/productDetails.module.css";
import GlobalLoading from "@/component/reusable/loading/GlobalLoading";
import DescriptionImaga from "@/component/productDetails/DescriptionImaga";
import ProductDescription from "@/component/productDetails/ProductDescription";
import { Suspense } from "react";
import Feature from "@/component/productDetails/Feature";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useProduct(parseInt(id));

  if (loading) {
    return <GlobalLoading isLoading={loading} />;
  }

  return (
    <div>
      <Box className={styles.productDetails_container}>
        {/* PRODUCT DESCRIPTION */}
        <ProductDescription data={data} />

        {/* FEATURE ICONS */}
        <Suspense>
          <Feature />
        </Suspense>

        {/* Description Images */}
        <DescriptionImaga descriptionImages={data.descriptionImages} />
      </Box>
    </div>
  );
};

export default ProductDetails;
