import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH, PAUSE,
  PERSIST, persistStore, PURGE,
  REGISTER, REHYDRATE
} from "redux-persist";

import { api } from "../services/api";
import authSlice from "./authSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
   
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
