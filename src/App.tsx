import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import './App.css'
import AppHeader from './components/app-header'
import routes from './router/index'

function App() {

    return (
        <>
            <div>
                <AppHeader />
                <Suspense fallback="loading">
                    <div className='main'>{useRoutes(routes)}</div>
                </Suspense>
            </div>
        </>
    )
}

export default App
