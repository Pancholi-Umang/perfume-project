import React from "react";
import './ReactStyle.css';

const CartButtonQuantity = ({valueQuantity, plusing, minusing, id}) => {

  
  return (
    <>
      <button type="submit" className="px-2 btn xcv madeBtn" onClick={() => minusing(id)} >  - </button>
      <input className=" text-center GiveOnMargin RemoveSpinner no-drop form-control input-sm" type="number" value={valueQuantity} disabled />
      <button className="px-2 btn xcv madeBtn" onClick={()=>plusing(id)}> + </button>
    </>
  );
}; 

export default CartButtonQuantity;
