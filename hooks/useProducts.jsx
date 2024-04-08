"use client";
import { fetchProduct, fetchProducts } from "@/utils/fetchItems";
import { useQuery, keepPreviousData } from "react-query";

export const useProducts = () => {
  const { data, isLoading, error } = useQuery({
    queryFn: fetchProducts,
    queryKey: ["Products"],
    placeholderData: keepPreviousData,
  });

  const products = data?.products?.data?.map((item) => {
    const { id, attributes } = item;
    const {
      discount,
      display,
      name,
      price,
      title,
      brand,
      category,
      descriptionImage,
      productImage,
      variation,
      displayImage,
    } = attributes;

    const { name: brandName } = brand?.data?.attributes;
    const { categoryName } = category?.data?.attributes;

    const proImage = productImage.data.map((item) => {
      const {
        id,
        attributes: { url },
      } = item;

      return { id, url };
    });

    const descImage = descriptionImage.data.map((item) => {
      const {
        id,
        attributes: { url },
      } = item;

      return { id, url };
    });

    const displaYImage = displayImage?.data?.attributes;

    return {
      id,
      discount,
      display,
      name,
      price,
      title,
      brandName,
      categoryName,
      variation,
      proImage,
      descImage,
      displaYImage: displaYImage?.url,
    };
  });

  return {
    productData: products,
    productLoading: isLoading,
    productError: error,
  };
};

export const useDiscountProduct = () => {
  const {
    productData,
    productLoading: discountLoading,
    productError: discountError,
  } = useProducts();
  const discountProducts = productData?.filter((item) => item.discount);

  return {
    discountProducts,
    discountError,
    discountLoading,
  };
};

export const useProduct = (productId) => {
  const { data, isLoading, error } = useQuery({
    queryFn: () => fetchProduct(productId),
    queryKey: ["Product", productId],
    placeholderData: keepPreviousData,
  });

  const item = data?.product?.data;

  let productDetails = {};

  if (item) {
    const {
      discount,
      display,
      name,
      price,
      title,
      productImage,
      descriptionImage,
      category,
      ratings,
      variation,
      displayImage,
    } = item?.attributes;

    const {
      attributes: { url: displayImageUrl },
    } = displayImage?.data;

    const productImages = productImage?.data?.map((item) => {
      const {
        id,
        attributes: { url },
      } = item;
      return { productImageID: id, productImageURL: url };
    });

    const descriptionImages = descriptionImage?.data?.map((item) => {
      const {
        id,
        attributes: { url },
      } = item;
      return { descriptionImageID: id, descriptionImageURL: url };
    });

    const {
      id: categoryID,
      attributes: { categoryName },
    } = category?.data;

    productDetails = {
      id: item?.id,
      productImages,
      name,
      discount,
      title,
      display,
      price,
      categoryID,
      categoryName,
      descriptionImages,
      displayImageUrl,
      variation,
    };
  }

  return {
    data: productDetails,
    loading: isLoading,
    error,
  };
};

export const useCategoryProduct = (categorynName) => {
  const { productData, productLoading, productError } = useProducts();

  const filteredProduct = productData?.filter(
    (item) => item.categoryName === categorynName
  );

  return {
    categoryData: filteredProduct,
    productLoading,
    productError,
  };
};
