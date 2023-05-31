import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

export const store = configureStore({reducer});

// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { reducer } from "./reducer";

// const persistConfig = {
//     key: 'root',
//     storage,
// };

// const persistedReducer = persistReducer(persistConfig, reducer);
// export const store = configureStore({ reducer: persistedReducer });
// export const persistor = persistStore(store);