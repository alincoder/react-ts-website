import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App.tsx'
import './index.css'
import './assets/css/reset.css'
import './assets/css/common.css'
import store from './store/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>
    </React.StrictMode>,
)
