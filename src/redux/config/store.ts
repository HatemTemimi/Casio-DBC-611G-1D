import { configureStore } from '@reduxjs/toolkit'
import moduleReducer from '../module'

export const store = configureStore({
  reducer: { 
        moduleReducer,
   },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch