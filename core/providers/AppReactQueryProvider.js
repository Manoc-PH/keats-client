import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export default function AppReactQueryProvider({ children }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
