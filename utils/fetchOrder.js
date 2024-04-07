import instance from "./axios";

export const createOrder = async (
  profileID,
  productID,
  subtotal,
  total,
  quantity
) => {
  const res = await instance.post("/api/orders", {
    data: {
      profile: profileID,
      products: productID,
      subtotal: subtotal,
      total: total,
      quantity: quantity,
      paymentMethod: "COD",
    },
  });

  return res?.data;
};
