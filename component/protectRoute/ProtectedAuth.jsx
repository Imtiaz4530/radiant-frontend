"use client";
import { useHandleLogin } from "@/hooks/useAuth";
import GlobalLoading from "../reusable/loading/GlobalLoading";

const ProtectedAuth = ({ children }) => {
  const { loading } = useHandleLogin();
  if (loading) {
    return (
      <div>
        <GlobalLoading isLoading={loading} />
      </div>
    );
  }
  return children;
};

export default ProtectedAuth;
