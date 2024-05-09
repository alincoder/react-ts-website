import React, { memo } from 'react'

import './style.css'

const AppHeader = memo(() => {

    return (
        <div className='header-wrap'>
            <div className='logo'>
                <a href="/">Logo</a>
            </div>
            <div>
                Sign in
            </div>
        </div>
    )
})

export default AppHeader