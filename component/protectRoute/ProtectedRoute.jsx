"use client";
import { useCheckAuthToken } from "@/hooks/useAuth";
import GlobalLoading from "../reusable/loading/GlobalLoading";

const ProtectedRoute = ({ children }) => {
  const { loading } = useCheckAuthToken();

  if (loading) {
    return (
      <div>
        <GlobalLoading isLoading={loading} />
      </div>
    );
  }
  return children;
};

export default ProtectedRoute;
