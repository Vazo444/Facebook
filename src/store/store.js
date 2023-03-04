import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./slices/posts/postsSlices";
import { searchReducer } from "./slices/search/searchSlices";
import { usersReducer } from "./slices/users/usersSlices";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'fantastikfacebook',
    storage,
}

const rootReduser = combineReducers({
    posts: postsReducer,
    users: usersReducer,
    search: searchReducer
})

const persistedReducer = persistReducer(persistConfig, rootReduser)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return [...getDefaultMiddleware({
            serializableCheck: {
              ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        }),]
    }
})

export const persister = persistStore(store)

export default store