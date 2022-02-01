import React from 'react'
import './HandlingStyles.css'

const Handling = () => {
    return (
        <div name='handling' className='handling'>
            <div className="container">
                <div className="top">
                    <h1>Handling</h1>
                </div>
                <div className="bottom">
                    <button className="btn btn-dark">Drive</button>
                    <button className="btn">Ride</button>
                </div>
            </div>
        </div>
    )
}

export default Handling
