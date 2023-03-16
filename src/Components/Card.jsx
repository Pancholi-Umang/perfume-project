import React from "react";
import "./ReactStyle.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Card({ value }) {    
  const { imag, name, category, price, id } = value;

// multiple time rendering thay chhe

//   const checkdata = `https://cart-47ea1-default-rtdb.firebaseio.com/cart.json`;
//   const getData = () => {
//     axios.get(checkdata).then((response) => {
//       setCheckValue(response.data);
//     });
//   };
//   useEffect(() => {
//     getData();
//   }, []);   

  const SetCart = (val,id) => {
    console.log(id);
    axios({
      method: "post",
      url: "https://cart-47ea1-default-rtdb.firebaseio.com/cart.json",
      data: {
        category: val.category,
        description: val.description,
        name: val.name,
        imag: val.imag,
        price: val.price,
        id: id,
        quantity: val.quantity,
      },
    });
    axios.put(
      `https://shine-perfumes-default-rtdb.firebaseio.com/items/${id}.json`,
      {
        category: val.category,
        description: val.description,
        name: val.name,
        imag: val.imag,
        price: val.price,
        id: id,
        quantity: val.quantity,
        is_wishlist:"false",
        status:"true"
      }
    );
   };

  return (
    <>
      <div className=" mt-2 mx-1 col-md-3 myData p-1 card">
        <img className="img myCardImage" src={imag} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title categoryPrice text-center">
            {name.toUpperCase()}&nbsp;({category.toUpperCase()})
          </h5>
          <p className="card-text categoryPrice text-center">
            <strong>₹{price}</strong>
          </p>
          <p className="card-text btnAround d-flex justify-content-around p-1">
            <button className="btn clor myChange" onClick={() => SetCart(value,id)} >
              ADD CART
            </button>
            <Link className="btn changeColorButton myChange" to={`/product/${name}/${id}`} >
              BUY NOW
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
