"use client";

import CardContainer from "@/component/reusable/CardContainer";
import { Suspense } from "react";
import ProductBanner from "@/component/productDetails/ProductBanner";

const Products = () => {
  return (
    <div>
      <Suspense>
        <ProductBanner />
        <CardContainer dc={false} />
      </Suspense>
    </div>
  );
};

export default Products;
