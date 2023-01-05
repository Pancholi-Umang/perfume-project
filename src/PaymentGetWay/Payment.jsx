import React from 'react'
import './PaymentStyle.css'

function Payment() {

    return (
        <div className="container">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Pay with card</span>
            </h4>
            <form >

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="cc-name">Name on card</label>
                        <input
                            id="cc-name"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="cc-email">Email</label>
                        <input
                            id="cc-email"
                            type="text"
                            className="form-control"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 mb-3">
                        <label htmlFor="cc-number">Card Number</label>
                        <input
                            id="cc-number"
                            type="text"
                            className="form-control"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="expiry">Expiration Date</label>
                        <input
                            id="expiry"
                            className="form-control"
                            type="text"
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="cvc">CVC</label>
                        <input
                            id="cvc"
                            className="form-control"
                            type="text"
                        />
                    </div>
                </div>

                <hr className="mb-4" />
                <button className="btn btn-dark w-100" type="submit" > 
                <div className="spinner-border spinner-border-sm text-light" role="status"></div>
                </button>
                {/* {errorMsg && <div className="text-danger mt-2">{errorMsg}</div>} */}
            </form>
        </div>
    )
}

export default Payment

// disabled={loading}