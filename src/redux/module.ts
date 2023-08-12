import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "./store"

// Define a type for the slice state
interface ModuleState {
    luminous: boolean
  }
  // Define the initial state using that type
  const initialState: ModuleState = {
    luminous: false,
  }
  
  export const counterSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      switchLight: (state) => {
        state.luminous = !state.luminous
      },
    },
  })
  
  export const { switchLight } = counterSlice.actions
  
  // Other code such as selectors can use the imported `RootState` type
  export const selectCount = (state: RootState) => state.counter.value
  
  export default counterSlice.reducer