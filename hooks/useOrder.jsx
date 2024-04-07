export const useProductIds = (item) => {
  let productIds = item.reduce((acc, cur) => {
    acc.push(cur.productId);

    return acc;
  }, []);

  return { productIds };
};

export const useProductQuantity = (item) => {
  let quantity = item.reduce((acc, cur) => {
    acc += cur.quantity;

    return acc;
  }, 0);

  return { quantity };
};
