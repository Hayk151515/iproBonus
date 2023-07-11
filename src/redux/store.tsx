import { configureStore } from '@reduxjs/toolkit'
import { accessApi } from './accessApi';
import { bonusApi } from './bonusApi';

export const store = configureStore({
  reducer: {
    [accessApi.reducerPath]: accessApi.reducer,
    [bonusApi.reducerPath]: bonusApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(bonusApi.middleware, accessApi.middleware)
})
