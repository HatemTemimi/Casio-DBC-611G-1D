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
  
  export const moduleSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      switchLight: (state) => {
        state.luminous = !state.luminous
      },
    },
  })
  
  export const { switchLight } = moduleSlice.actions
  
  export default moduleSlice.reducer