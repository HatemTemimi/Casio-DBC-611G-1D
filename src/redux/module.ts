import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "./config/store"

interface ModuleState {
    luminous: boolean
    mode: string
  }
  const initialState: ModuleState = {
    luminous: false,
    mode: 'watch',
  }
  
  export const moduleSlice = createSlice({
    name: 'module',
    initialState,
    reducers: {
      switchLight: (state) => {
        state.luminous = !state.luminous
      },
      switchMode: (state) => {
        if (state.mode == 'calculator'){
          state.mode = 'watch'
        } else {
          state.mode = 'calculator'
        }
      },
    },
  })
  
  export const { switchLight, switchMode } = moduleSlice.actions
  
  export default moduleSlice.reducer