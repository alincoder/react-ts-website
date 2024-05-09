import React, { memo } from 'react'

import './style.css'

const Home = memo(() => {

    return (
        <div className='outer-main'>
            <div className='home-main'>
                This is home page
            </div>
        </div>

    )
})

export default Home