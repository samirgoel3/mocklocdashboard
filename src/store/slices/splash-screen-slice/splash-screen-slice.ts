import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface SplashScreenState {
    loggedIn: boolean,
    loading:boolean
}

const initialState: SplashScreenState = {
    loggedIn: false,
    loading:true
}

export const splashScreenSlice = createSlice({
    name: 'splash',
    initialState,
    reducers: {
        loggedIn: (state, action: PayloadAction<boolean>) => { state.loggedIn = action.payload },
        loading: (state, action: PayloadAction<boolean>) => { state.loading = action.payload },
    },
})

export const { loggedIn, loading } = splashScreenSlice.actions

export default splashScreenSlice.reducer


