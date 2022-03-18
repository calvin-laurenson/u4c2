import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { NativeRouter, Route, Routes } from "react-router-native";
import AllCurrencies from "./pages/AllCurrencies";
import SymbolPage from "./pages/SymbolPage";

const queryClient = new QueryClient();

export default function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeRouter>
        <Routes>
          <Route path="/" element={<AllCurrencies />} />
          <Route path="/symbol/:symbol" element={<SymbolPage />} />
        </Routes>
      </NativeRouter>
    </QueryClientProvider>
  );
}
