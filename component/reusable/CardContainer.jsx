"use client";
import { Suspense } from "react"; // Import Suspense
import { useCategoryProduct, useDiscountProduct } from "@/hooks/useProducts";
import ProductCard from "./ProductCard";
import { usePathname, useSearchParams } from "next/navigation";

const CardContainer = ({ dc }) => {
  const { discountProducts, discountError, discountLoading } =
    useDiscountProduct();
  const query = useSearchParams();
  const findQuery = query.get("category");
  const { categoryData, productError, productLoading } =
    useCategoryProduct(findQuery);

  const path = usePathname();
  let data;
  if (path === "/") {
    data = discountProducts?.slice(0, 8);
  } else {
    data = discountProducts;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductCard
        data={dc ? data : categoryData}
        loading={dc ? discountLoading : productLoading}
        error={dc ? discountError : productError}
      />
    </Suspense>
  );
};

export default CardContainer;
