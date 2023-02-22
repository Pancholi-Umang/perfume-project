import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./PaymentStyle.css";

const Invoice = ({showProductPage,PriceDetailsPage,invoiceNum,trackingNum,cardDetails}) => {
    const {name , price} = showProductPage;
    let Quantity = PriceDetailsPage / price;


  const [dates,setDates] = useState("");
  useEffect(()=>{
    var today = new Date();
    let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    setDates(date)
  },[])

  return (
    <div>
      <div className="containers">
        <div className="brand-sections">
          <div className="row dataspace">
            <div className="col-6 sss">
              <h1 className="text-white">SHINE PERFUMES</h1>
            </div>
            <div className="col-6 sss">
              <div className="company-details">
                <p className="text-white">D-154,155 Gulvadi Road</p>
                <p className="text-white">Surat , Gujrat</p>
                <p className="text-white">+91 8690012345</p>
              </div>
            </div>
          </div>
        </div>

        <div className="body-section">
          <div className="row dataspace">
            <div className="col-md-6 sss">
              <h2 className="headings">Invoice No : {invoiceNum}</h2>
              <p className="sub-headings">Tracking No : SHINE{trackingNum} </p>
              <p className="sub-headings">Order Date: {dates} </p>
              <p className="sub-headings">
                Email Address: shineperfumes@gmail.com
              </p>
            </div>
            <div className="col-md-6 sss">
              <p className="sub-headings">Full Name: {cardDetails.CardOnName.toUpperCase()}</p>
              <p className="sub-headings">Address: {cardDetails.Address.toLowerCase()}</p>
              <p className="sub-headings">City: {cardDetails.City.toUpperCase()} - {cardDetails.PinCode}</p>
              <p className="sub-headings">State: {cardDetails.State.toUpperCase()}</p>
            </div>
          </div>
        </div>

        <div className="body-section">
          <h3 className="headings">Ordered Items</h3>
          <br />
          <table className="table-bordereds">
            <thead>
              <tr>
                <th className="text-center">Perfume Name</th>
                <th className="w-20 text-center">Price</th>
                <th className="w-20 text-center">Quantity</th>
                <th className="w-20 text-center">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{name}</td>
                <td>₹{price}</td>
                <td>{Quantity}</td>
                <td>₹{PriceDetailsPage}</td>
              </tr>
              <tr>
                <td colSpan="3" className="text-right">
                  Sub Total &nbsp;
                </td>
                <td>₹{PriceDetailsPage}</td>
              </tr>
              <tr>
                <td colSpan="3" className="text-right">
                  Total Tax &nbsp;
                </td>
                <td> 18%</td>
              </tr>
              <tr>
                <td colSpan="3" className="text-right">
                  Grand Total &nbsp;
                </td>
                <td> ₹{Math.floor((PriceDetailsPage * 18 / 100) + PriceDetailsPage)} </td>
              </tr>
            </tbody>
          </table>
          <br />
          <h3 className="headings">Payment Status: Paid</h3>
        </div>

        <div className="body-section">
          <p>
            &copy; Copyright 2023 - shineperfumes. All rights reserved.
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
