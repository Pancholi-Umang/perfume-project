import React from 'react'
import './ReactStyle.css'

const QuantityBtn = ({ valueQuantity, plusing, minusing}) => {
    

    return (
        <>
            <div className="counter">
                <span className="down" onClick={minusing}>-</span>
                <input type="text" value={valueQuantity} />
                <span className="up" onClick={plusing} >+</span>
            </div>
        </>
    )
}

export default QuantityBtn