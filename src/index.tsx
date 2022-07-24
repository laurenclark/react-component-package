import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import { createRoot } from 'react-dom/client'
import './assets/styles/app.scss'
import App from './App'

const root = createRoot(document.getElementById('app') as HTMLElement)
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)
