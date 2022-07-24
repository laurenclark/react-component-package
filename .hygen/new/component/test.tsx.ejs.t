---
to: <%= absPath %>/__tests__/<%= component_name %>.test.tsx
---
import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, RenderResult } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../store/store'
import { <%= component_name %> } from '../<%= component_name %>';

const renderApp = (): RenderResult =>
    render(
        <Provider store={store}>
            <<%= component_name %>/>
        </Provider>
    )

describe('The <%= component_name %> Component', () => {
    it('Renders the <%= component_name %> component without crashing', () => {
        const <%= component_name %>Wrapper = renderApp()
        expect(<%= component_name %>Wrapper).toMatchSnapshot()
    })
    it('Has a test ID', () => {
        const <%= component_name %>Wrapper = renderApp()
        const element = screen.getByTestId(/test/i);
        expect(element).toBeInTheDocument();
    })
})
