import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface LoginScreenState {
  value: number,
}

const initialState: LoginScreenState = {
  value: 79,
}

export const loginScreenSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    increment: (state) => {state.value += 1},

    decrement: (state) => {state.value -= 1},

    incrementByAmount: (state, action: PayloadAction<number>) => {state.value += action.payload},


  },
})

export const { increment, decrement, incrementByAmount } = loginScreenSlice.actions



export default loginScreenSlice.reducer


