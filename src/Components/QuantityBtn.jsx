import React from 'react'
import './ReactStyle.css'

const QuantityBtn = ({valOFQuantrity,Adds,Rems}) => {
    
    return (
        <>
            <div className="counter">
                <span className="down" onClick={Rems}>-</span>
                    <input type="text" className='RemoveSpinner no-drop' value={valOFQuantrity} disabled/> 
                <span className="up" onClick={Adds} >+</span>
            </div>
        </>
    )
}

export default QuantityBtn