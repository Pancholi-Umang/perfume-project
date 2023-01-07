import React from 'react'
import './ReactStyle.css'

const QuantityBtn = () => {
    return (
        <>
            <div className="counter">
                <span className="down" onClick='decreaseCount(event, this)'>-</span>
                <input type="text" value="1" />
                    <span className="up" onClick='increaseCount(event, this)'>+</span>
            </div>
        </>
    )
}

export default QuantityBtn