import axios from "axios";
import React, { useState, useEffect } from "react";

const CartInvoice = () => {
  const [apiData, setApiData] = useState([]);
  const [Data, setData] = useState([]);

  const baseURL = `https://perfumeweb-60a0e-default-rtdb.firebaseio.com/invoice.json`;
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setApiData(response.data);
    });
  }, []);

  const URL = `https://cart-47ea1-default-rtdb.firebaseio.com/cart.json`;
  useEffect(() => {
    axios.get(URL).then((response) => {
      setData(response.data);
    });
  }, []);

  var arr = [];
  for (let key in apiData) {
    arr.push(Object.assign(apiData[key], { id: key }));
  }
  var arrData = [];
  for (let key in Data) {
    arrData.push(Object.assign(Data[key], { id: key }));
  }

  let arraydata = arr[arr.length - 1];
  console.log(arraydata);

  const trackingNum = Math.floor(Math.random() * 122000000);
  const invoiceNum = Math.floor(Math.random() * 10000);

  const [dates, setDates] = useState("");
  useEffect(() => {
    var today = new Date();
    let date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    setDates(date);
  }, []);

  let cartTotal = 0;
  let prices = 0;
  let total = [];

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      <div className="containers">
        <div className="brand-sections">
          <div className="row dataspace">
            <div className="col-md-6 col-sm-12 mb-3 sss">
              <h1 className="text-white onMarginautoMedia">SHINE PERFUMES</h1>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="company-details ">
                <p className="text-white">D-154,155 Gulvadi Road</p>
                <p className="text-white">Surat , Gujrat</p>
                <p className="text-white">+91 8690012345</p>
              </div>
            </div>
          </div>
        </div>

        <div className="body-section">
          <div className="row dataspace ">
            {loading ? (
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              <>
                <div className="col-md-6 tong">
                  <h2 className="headings">Invoice No : {invoiceNum}</h2>
                  <p className="sub-headings">
                    Tracking No : SHINE{trackingNum}{" "}
                  </p>
                  <p className="sub-headings">Order Date: {dates} </p>
                  <p className="sub-headings">
                    Email Address: shineperfumes@gmail.com
                  </p>
                </div>
                <hr className="d-md-none d-sm-block" />
                <div className="col-md-6 tong">
                  <p className="sub-headings">
                    Full Name: {arraydata?.CardOnName?.toUpperCase()}
                  </p>
                  <p className="sub-headings">
                    Address: {arraydata?.Address?.toLowerCase()}
                  </p>
                  <p className="sub-headings">
                    City: {arraydata?.City.toUpperCase()} - {arraydata?.PinCode}
                  </p>
                  <p className="sub-headings">
                    State: {arraydata?.State.toUpperCase()}
                  </p>
                </div>
              </>
            )}
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
              {arrData?.map((values, index) => {
                const { name, price, quantity } = values;
                return (
                  <tr key={index}>
                    <td>{name}</td>
                    <td>₹{price}</td>
                    <td>{quantity}</td>
                    <td>₹{price * quantity}</td>
                  </tr>
                );
              }, [])}

              <tr>
                <td colSpan="3" className="text-right">
                  Sub Total &nbsp;
                </td>
                {arrData?.map((data) => {
                  prices = Number(data.price * data.quantity);
                  total.push(prices);
                  cartTotal += prices;
                }, [])}
                <td>₹{cartTotal}</td>
              </tr>
              <tr>
                <td colSpan="3" className="text-right">
                  Total Tax &nbsp;
                </td>
                <td>18%</td>
              </tr>
              <tr>
                <td colSpan="3" className="text-right">
                  Grand Total &nbsp;
                </td>
                <td>
                  ₹
                  {Math.floor(
                    (Number(cartTotal) * 18) / 100 + Number(cartTotal)
                  )}
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <h3 className="headings">Payment Status: Paid</h3>
        </div>

        <div className="body-section">
          <p className="bodysecP">
            &copy; Copyright 2023 - shineperfumes. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartInvoice;
