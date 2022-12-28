import React from 'react'

const AddCart = ({addToCart}) => {
    return (
        <>
            <div className='row d-flex justify-content-around mt-2 px-2'>
                {addToCart.map((value, index) => {
                    console.log(value); 
                    return (
                        <div className=" mt-2 mx-1 col-md-3 myData p-1 card" key={index}>
                            <img className="img myCardImage" src={value.imag} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title text-center">{value.name.toUpperCase()}&nbsp;({value.category.toUpperCase()})</h5>
                                <p className="card-text text-center"><strong>{value.price}₹</strong></p>
                                <p className="card-text btnAround d-flex justify-content-around p-1">
                                    <button className="btn btn-secondary myChange ">BUY NOW</button>
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