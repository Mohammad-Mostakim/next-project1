
import { configureStore } from '@reduxjs/toolkit'
import ThemeSlice from '@/lib/Theme/ThemeSlice'
import AuthSlice from '@/lib/Redux/AuthReduxtToolkit/AuthSlice'
import { CommonDataQuery } from '@/lib/Redux/CommonDataQuery'
import UserDataSlice from '../UserDataQuary/UserDataSlice'

export const ReduxStore = configureStore({
  reducer: {
    theme: ThemeSlice.reducer,
    auth: AuthSlice.reducer,
    userData: UserDataSlice.reducer,
    [CommonDataQuery.reducerPath]: CommonDataQuery.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disabling serializable state check
    }).concat(CommonDataQuery.middleware)
})

export type RootState = ReturnType<typeof ReduxStore.getState>
export type AppDispatch = typeof ReduxStore.dispatch