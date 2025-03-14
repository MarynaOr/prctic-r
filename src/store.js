import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./component/Redux/counterSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "counter-persist",
  version: 1,
  storage,
};


export const store = configureStore({
  reducer: {
    counter: persistReducer(persistConfig, counterReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
 export const persistor = persistStore(store);
