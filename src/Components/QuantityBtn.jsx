import React,{useState} from 'react'
import './ReactStyle.css'

const QuantityBtn = () => {
    let [valueQuantity, setValQuantity] = useState(1);

    function plusing() {
        if (valueQuantity < 999) {
            setValQuantity(valueQuantity + 1)
        }
        else {
            setValQuantity(999)
        }
    }

    function minusing() {
        if (valueQuantity > 1) {
            setValQuantity(valueQuantity - 1)
        }
        else {
            setValQuantity(1)
        }
    }

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