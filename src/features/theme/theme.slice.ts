import { createSlice } from '@reduxjs/toolkit'
import { changeThemeReducer } from './reducers/changeThemeReducer'
export interface ThemeState {
    theme: string
}

export const initialState: ThemeState = {
    theme: 'theme-default',
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: changeThemeReducer,
    },
})

export const { changeTheme } = themeSlice.actions
export default themeSlice.reducer
