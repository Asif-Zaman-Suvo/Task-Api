import { configureStore } from "@reduxjs/toolkit";
import { getApi } from "./apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [getApi.reducerPath]: getApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getApi.middleware),
});
setupListeners(store.dispatch);
