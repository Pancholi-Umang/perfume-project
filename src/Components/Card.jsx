import React from 'react'
import './ReactStyle.css'
import { Link } from 'react-router-dom';

function Card({ SetCart, value, ClickToAnotherPage }) {
    const {imag, name, category, price } = value;
    return (
        <>
            <div className=" mt-2 mx-1 col-md-3 myData p-1 card">
                <img className="img myCardImage" src={imag} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title categoryPrice text-center">{name.toUpperCase()}&nbsp;({category.toUpperCase()})</h5>
                    <p className="card-text categoryPrice text-center"><strong>₹{price}</strong></p>
                    <p className="card-text btnAround d-flex justify-content-around p-1">
                        <button className="btn clor myChange" onClick={() => SetCart(value)}>ADD CART</button>
                        <Link className="btn changeColorButton myChange" to={`/product/${name}`} onClick={()=>ClickToAnotherPage(value)} >BUY NOW</Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Card