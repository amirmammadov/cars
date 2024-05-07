import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../features/appSlice";

const store = configureStore({
  reducer: appSlice,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
