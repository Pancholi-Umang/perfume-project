import React, { useEffect, useState } from "react";
import "./PaymentStyle.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const Invoice = () => {
  const { productname, totalprice } = useParams();
  const [apiData, setApiData] = useState([]);
  const [mapping, setMapping] = useState([]);
  const [dates, setDates] = useState("");
  const [dataToggle, setDataToggle] = useState(false)

  let Prices = Number(0);

  const URL = "https://listofallperfumes-default-rtdb.firebaseio.com/items.json";
  useEffect(() => {
    axios.get(URL).then((response) => {
      setMapping(response.data);
    });
  }, []);

  const baseURL = "https://perfumeweb-60a0e-default-rtdb.firebaseio.com/invoice.json";
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setApiData(response.data);
      setDataToggle(true)
    });
  }, [dataToggle]);

  var arr = [];
  for (let key in apiData) {
    arr.push(Object.assign(apiData[key], { id: key }));
  }
  let arraydata = arr[arr.length - 1];

  mapping.map((values) => {
    if (values.name === productname) {
      Prices = values.price;
    }
  }, []);

  
  const trackingNum = Math.floor(Math.random() * 122000000);
  const invoiceNum = Math.floor(Math.random() * 10000);

  useEffect(() => {
    var today = new Date();
    let date = today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
    setDates(date);
  }, [apiData]);


  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [apiData]);

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
            {
              loading ? (
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
                    City: {arraydata?.City.toUpperCase()} - {arraydata?.PinCode}
                  </p>
                  <p className="sub-headings">
                    State: {arraydata?.State.toUpperCase()}
                  </p>
                </div>
              </>
            )
            }
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
                <td>{productname}</td>
                <td>₹{Prices}</td>
                <td>{totalprice / Prices}</td>
                <td>₹{totalprice}</td>
              </tr>
              <tr>
                <td colSpan="3" className="text-right">
                  Sub Total &nbsp;
                </td>
                <td>₹{totalprice}</td>
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
                    (Number(totalprice) * 18) / 100 + Number(totalprice)
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

export default Invoice;
