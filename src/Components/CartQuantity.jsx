import React from 'react'

const CartQuantity = ({CheckPrice,setCheckPrice}) => {
    return (
        <>
            <div className="col-md-2 col-lg-2 col-xl-2 d-flex align-items-center justify-content-around">
                <button className="px-2 btn">-</button>
                <input
                    className="text-center rounded-5 form-control input-sm"
                    type="number"
                    value={CheckPrice}
                    onChange={(e) => setCheckPrice(e.target.value)}
                />
                <button className="px-2 btn">+</button>
            </div>
        </>
    )
}

export default CartQuantity