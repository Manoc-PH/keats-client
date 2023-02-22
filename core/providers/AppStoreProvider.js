import React from "react";
import { Provider as StoreProvider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

// Reducers
import { reducers } from "@app/core/store";

function AppStoreProvider(props) {
  // Destructure
  const { children } = props;

  const store = configureStore({
    reducer: reducers,
  });

  return <StoreProvider store={store}>{children}</StoreProvider>;
}

export default AppStoreProvider;
