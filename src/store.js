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
import { todosReducer } from "./component/Redux/todoSlice";
import { filterReducer } from "./component/Redux/filterSlice";

const persistConfig = {
  key: "counter-persist",
  version: 1,
  storage,
};


export const store = configureStore({
  reducer: {
    counter: persistReducer(persistConfig, counterReducer),
    todos: todosReducer,
    filter: filterReducer,


  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
 export const persistor = persistStore(store);
