import React from 'react'

const AddCart = ({ addToCart,deleteItems }) => {
    return (
        <>
            <div className='row d-flex justify-content-around mt-2 px-2'>
                {addToCart.map((value, index) => {
                    const { id, imag, name, category, price } = value;
                    return (
                        <div className=" mt-2 mx-1 col-md-3 myData p-1 card" key={index}>
                            <img className="img myCardImage" src={imag} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title text-center">{name.toUpperCase()}&nbsp;({category.toUpperCase()})</h5>
                                <p className="card-text text-center"><strong>{price}₹</strong></p>
                                <p className="card-text btnAround d-flex justify-content-around p-1">
                                    <button className="btn btn-secondary myChange ">BUY NOW</button>
                                    <button className="btn btn-secondary myChange "onClick={() => deleteItems(id)}>REMOVE CART</button>
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default AddCart