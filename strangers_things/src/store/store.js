import { configureStore } from "@reduxjs/toolkit";

import api from "./api";
import authReducer from "../features/authorization/authSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
