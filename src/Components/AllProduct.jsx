import React from 'react'
import Card from './Card';
import Footer from './Footer';

function AllProduct({ changeHandler, data, SetCart, ClickToAnotherPage}) {
  return (
    <>
      <div className="col-md-4 container px-1">
        <input type="text" className="w-100 form-control" placeholder='Search Here...' onChange={changeHandler} />
      </div>

      <div className='row d-flex justify-content-around mt-2 px-2'>
        {data.map((value, index) => {

          return (
            <Card key={index} SetCart={SetCart} ClickToAnotherPage={ClickToAnotherPage} value={value} />
          );
        })}
      </div>
      <Footer />
    </>
  )
}

export default AllProduct;