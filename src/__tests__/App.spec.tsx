import '@testing-library/jest-dom'
import { render, screen, RenderResult } from '@testing-library/react'
import { Provider } from 'react-redux'

import store from '../store/store'
import App from '../App'

const renderApp = (): RenderResult =>
    render(
        <Provider store={store}>
            <App />
        </Provider>
    )

describe('The App Component', () => {
    it('Renders the App component correctly', () => {
        const appWrapper = renderApp()
        expect(appWrapper).toMatchSnapshot()
    })
    it('Displays the app text', () => {
        renderApp()
        const appText = screen.getByText(/^app$/i)
        expect(appText).toBeInTheDocument()
    })
    it('Changes the theme after 5 seconds', () => {
        jest.useFakeTimers()
        renderApp()
        const appText = screen.getByText(/^app$/i)
        expect(appText.parentNode).toHaveClass('theme-default')
        setTimeout(() => {
            expect(appText.parentNode).toHaveClass('theme-alternate')
        })
    }, 5000)
})
