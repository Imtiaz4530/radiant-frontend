"use client";
import { useCheckCartItem } from "@/hooks/useCart";
import GlobalLoading from "../reusable/loading/GlobalLoading";

const ProtectedOrder = ({ children }) => {
  const { loading } = useCheckCartItem();

  if (loading) {
    return (
      <div>
        <GlobalLoading isLoading={loading} />
      </div>
    );
  }
  return children;
};

export default ProtectedOrder;
