"use client";
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
    <>
      <ProductCard
        data={dc ? data : categoryData}
        loading={dc ? discountLoading : productLoading}
        error={dc ? discountError : productError}
      />
    </>
  );
};

export default CardContainer;
