import React from 'react'
import './PowerStyles.css'

const Power = () => {
    return (
        <div name='power' className='power'>
            <div className="container">
                <div className="top">
                    <h1>Power</h1>
                </div>
                <div className="bottom">
                    <button className="btn btn-dark">Drive</button>
                    <button className="btn">Ride</button>
                </div>
            </div>
        </div>
    )
}

export default Power
