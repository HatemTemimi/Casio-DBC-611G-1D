import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "./config/store"

interface ModuleState {
    luminous: boolean
    mode: string
    a: number | null
    b: number | null
    lastSet: string
    operation: string | null

  }
  const initialState: ModuleState = {
    luminous: false,
    mode: 'watch',
    a: null,
    b: null,
    lastSet: 'b',
    operation: null
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
      setCalculatorParams:(state, PayloadAction) => {
        if (state.lastSet==='b'){
          console.log("setting a")
          state.a = PayloadAction.payload
          state.lastSet = 'a'
        } else {
          console.log("setting b")
          state.b = PayloadAction.payload
          state.lastSet = 'b'
        }

      },
      setCalculatorOperation:(state, PayloadAction) => {
        state.operation = PayloadAction.payload
      }
    },
  })
  
  export const { switchLight, switchMode, setCalculatorParams, setCalculatorOperation} = moduleSlice.actions
  
  export default moduleSlice.reducer