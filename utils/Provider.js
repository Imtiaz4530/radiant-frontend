"use client";

import store from "@/store/store";
import { StoreProvider } from "easy-peasy";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const ReactQueryProvider = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider store={store}>{children}</StoreProvider>
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
