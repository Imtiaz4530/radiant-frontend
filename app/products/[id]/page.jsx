"use client";
import { useProduct } from "@/hooks/useProducts";
import { Box } from "@mui/material";
import { useParams, useRouter, useSearchParams } from "next/navigation";

import styles from "@/styles/productDetails.module.css";
import GlobalLoading from "@/component/reusable/loading/GlobalLoading";
import FeatureIcons from "@/component/productDetails/FeatureIcons";
import DescriptionImaga from "@/component/productDetails/DescriptionImaga";
import ProductDescription from "@/component/productDetails/ProductDescription";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useProduct(parseInt(id));

  const query = useSearchParams();
  const findQuery = query.get("category");

  if (loading) {
    return <GlobalLoading isLoading={loading} />;
  }

  return (
    <div>
      <Box className={styles.productDetails_container}>
        {/* PRODUCT DESCRIPTION */}
        <ProductDescription data={data} />

        {/* FEATURE ICONS */}
        {findQuery === "SMART WATCH" && <FeatureIcons />}

        {/* Description Images */}
        <DescriptionImaga descriptionImages={data.descriptionImages} />
      </Box>
    </div>
  );
};

export default ProductDetails;
