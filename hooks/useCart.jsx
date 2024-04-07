import { useStoreActions, useStoreState } from "easy-peasy";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useAddToCart = (data, color) => {
  const { addToCart, updateQuantity } = useStoreActions(
    (action) => action.cart
  );
  const { item } = useStoreState((state) => state.cart);

  let discountPrice;
  if (data?.discount) {
    discountPrice = Math.round(
      data?.price - data?.price * (data?.discount / 100)
    );
  }

  const availableColor = data?.variation.filter((item) => item.quantity);
  const availableImage = data?.variation.filter((item) => item.color === color);

  const uniqId = `${data?.id}$${
    color ? availableImage[0]?.id : availableColor[0]?.id
  }`;

  const isProductInCart = item.filter((item) => item.uniqId === uniqId);

  const handleCart = () => {
    if (isProductInCart.length > 0) {
      if (isProductInCart[0].productQuantity > isProductInCart[0]?.quantity) {
        updateQuantity({
          id: uniqId,
          quantity: isProductInCart[0]?.quantity + 1,
        });
      }
    } else {
      addToCart({
        productId: parseInt(data?.id),
        variantId: color
          ? parseInt(availableImage[0]?.id)
          : parseInt(availableColor[0]?.id),
        uniqId: `${data?.id}$${
          color ? availableImage[0]?.id : availableColor[0]?.id
        }`,
        url: color
          ? availableImage[0]?.image?.data?.attributes.url
          : availableColor[0]?.image?.data?.attributes.url,
        title: data?.title,
        color: color ? color : availableColor[0].color,
        quantity: 1,
        price: discountPrice ? discountPrice : data?.price,
        productQuantity: color
          ? availableImage[0]?.quantity
          : availableColor[0]?.quantity,
      });
    }
  };

  return { handleCart };
};

export const useQuantityUpdate = (id, productQuantity, curQuantity) => {
  const { updateQuantity, removeFromCart } = useStoreActions(
    (action) => action.cart
  );
  const [quantity, setQuantity] = useState(curQuantity);

  const handleRemoveItem = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => {
        const newQuantity = prevQuantity - 1;
        updateQuantity({
          id: id,
          quantity: newQuantity,
        });
        return newQuantity;
      });
    } else if (quantity === 1) {
      removeFromCart(id);
    }
  };

  const handleAddItem = () => {
    if (productQuantity > quantity) {
      setQuantity((prevQuantity) => {
        const newQuantity = prevQuantity + 1;
        updateQuantity({
          id: id,
          quantity: newQuantity,
        });
        return newQuantity;
      });
    }
  };

  return {
    handleAddItem,
    handleRemoveItem,
  };
};

export const useQuantityCheck = (data) => {
  const quntity = data?.reduce((acc, cur) => {
    return (acc += cur.quantity);
  }, 0);

  return { quntity };
};

export const useCheckProductAlreadyInCart = (data) => {
  const { item } = useStoreState((state) => state.cart);

  const itemInCart = item.filter(
    (item) => item.productId === parseInt(data.id)
  );

  return { itemInCart };
};

export const useCalculateSubtotal = (data) => {
  const total = data.reduce((acc, cur) => {
    acc += cur.quantity * cur.price;
    return acc;
  }, 0);

  return { total };
};

export const useCheckCartItem = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { item } = useStoreState((state) => state.cart);

  const isCartEmpty = item.length === 0;

  useEffect(() => {
    if (isCartEmpty) {
      router.back();
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [isCartEmpty]);

  return { loading };
};
