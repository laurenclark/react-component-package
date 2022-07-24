import { PayloadAction } from '@reduxjs/toolkit'
import { ThemeState } from '../theme.slice'

export const changeThemeReducer = (
    state: ThemeState,
    action: PayloadAction<string>
): void => {
    state.theme = action.payload
}
