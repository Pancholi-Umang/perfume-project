import React, { useState, useEffect } from "react";
import html2canvas from "html2canvas";
import { useDispatch, useSelector } from "react-redux";
import { FetchCartData, getInvoiceDetails } from "../redux/action";

const CartInvoice = () => {
  const dispatch = useDispatch();
  const [dates, setDates] = useState("");

  // redux-script
  const Cartdata = useSelector((state) => state?.cartItem?.cart);
  const invoiceData = useSelector((state) => state?.invoice?.invoice);

  var arr = [];
  for (let key in invoiceData) {
    arr.push(Object.assign(invoiceData[key], { id: key }));
  }

  var arrData = [];
  for (let key in Cartdata) {
    arrData.push(Object.assign(Cartdata[key], { id: key }));
  }

  let arraydata = arr[arr.length - 1];

  const trackingNum = Math.floor(Math.random() * 122000000);
  const invoiceNum = Math.floor(Math.random() * 10000);

  useEffect(() => {
    var today = new Date();
    let date =
      today.getDate() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
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

  const canvas = document.getElementById("myCanvas");

  const handleScreenshot = () => {
    html2canvas(canvas).then(function (canvas) {
      const link = document.createElement("a");
      link.download = "screenshot.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  useEffect(() => {
    dispatch(FetchCartData());
    dispatch(getInvoiceDetails());
  }, []);

  return (
    <div>
      <div className="containers" id="myCanvas">
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
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              <>
                <div className="col-md-6 tong">
                  <h2 className="headings">Invoice No : {invoiceNum}</h2>
                  <p className="sub-headings">
                    Tracking No : SHINE{trackingNum}
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
                    City: {arraydata?.City.toUpperCase()}({arraydata?.PinCode})
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
      <div className="w-100 d-flex justify-content-center">
        <button
          className="btn btn-sm mx-auto col-md-3 bg-info "
          onClick={() => handleScreenshot()}
        >
          Print
        </button>
      </div>
    </div>
  );
};

export default CartInvoice;
