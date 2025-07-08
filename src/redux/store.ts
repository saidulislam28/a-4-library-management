import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./features/book/BookSlice";
import { baseApi } from "../services/baseApi";

export const store = configureStore({
  reducer: {
    book: bookReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (defaultMiddleWare) =>
    defaultMiddleWare().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
