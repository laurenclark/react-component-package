import store from '../../../store/store'
import { changeTheme } from '../theme.slice'

describe('changeThemeReducer test', () => {
    it('should change theme from default to another', () => {
        const defaultThemeText = 'theme-default'
        const newThemeText = 'theme-alternate'
        let state = store.getState().theme
        expect(state.theme).toBe(defaultThemeText)
        store.dispatch(changeTheme(newThemeText))
        state = store.getState().theme
        expect(state.theme).toBe(newThemeText)
    })
})
