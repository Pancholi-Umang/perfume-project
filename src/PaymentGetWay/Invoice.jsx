import React, { useEffect, useState } from "react";
import "./PaymentStyle.css";
import { useParams } from "react-router-dom";
import html2canvas from "html2canvas";
import { useDispatch, useSelector } from "react-redux";
import { getAllPerfume, getInvoiceDetails } from "../redux/action";

const Invoice = () => {
  const { productname, totalprice } = useParams();
  const [dates, setDates] = useState("");

  let Prices = Number(0);

  const dispatch = useDispatch();
  const PerfumesData = useSelector((state) => state?.item?.products);
  const invoiceData = useSelector((state) => state?.invoice?.invoice);

  var invoiceMap = [];
  for (let key in invoiceData) {
    invoiceMap.push(Object.assign(invoiceData[key], { id: key }));
  }

  var mapdata = [];
  for (let key in PerfumesData) {
    mapdata.push(Object.assign(PerfumesData[key], { id: key }));
  }
  let arraydata = invoiceMap[invoiceMap.length - 1];

  mapdata.map((values) => {
    if (values.name === productname) {
      Prices = values.price;
    }
  }, []);

  const trackingNum = Math.floor(Math.random() * 122000000);
  const invoiceNum = Math.floor(Math.random() * 10000);

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
    dispatch(getAllPerfume());
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

export default Invoice;
