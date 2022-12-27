import React, { useState, useEffect } from 'react'
import Item from '../Items/Items'

function AllProduct() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Item);
  }, [])

  const changeHandler = (e) => {
    var search = e.target.value;
    const myFilter = Item.filter((es) => {
      return es.name.toLowerCase().includes(search.toLowerCase());
    })

    setData(myFilter);

  }
  return (
    <>
      <div className="col-md-4 container px-1">
        <input type="text" className="w-100 form-control" placeholder='Search Here...' onChange={changeHandler} />
      </div>

      <div className='row d-flex justify-content-around mt-2 px-2'>
        {data.map((value, index) => {
          return (
            <div className=" mt-2 mx-1 col-md-3 myData p-1 card" key={index}>
              <img className="img myCardImage" src={value.imag} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title text-center">{value.name.toUpperCase()}&nbsp;({value.category.toUpperCase()})</h5>
                <p className="card-text text-center"><strong>{value.price}₹</strong></p>
                <p className="card-text btnAround d-flex justify-content-around p-1">
                  <button className="btn btn-secondary myChange ">BUY NOW</button>
                  <button className="btn btn-secondary myChange">ADD CART</button>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default AllProduct