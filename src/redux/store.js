import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactSlice';
import { filterReducer } from './filter/filterSlice';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootRreducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: persistReducer(persistConfig, authReducer),
});

export const store = configureStore({
  reducer: rootRreducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);