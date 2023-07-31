import React from "react";

const OrderSummary = ({ bookingData }) => {
  console.log(bookingData);
  return (
    <div>
      {""}
      <h3 className="text-success">Booking Summary</h3>
      <div className="mt-3">
        <div className="border d-flex justify-content-between py-3 px-2">
          <span className="fw-bold">Username:</span>
          <span className="ps-">{bookingData.userId}</span>{" "}
        </div>
        <div className="border d-flex justify-content-between py-3 px-2">
          <span className="fw-bold">Place:</span>
          <span className="ps-">{bookingData.package.location}</span>{" "}
        </div>
        <div className="border d-flex justify-content-between py-3 py-3 px-2">
          <span className="fw-bold"> Date:</span>
          {new Date(bookingData.dateOfTrip).toLocaleDateString()}
        </div>
        <div className="border d-flex justify-content-between py-3 py-3 px-2">
          <span className="fw-bold">No of Person:</span>
          {bookingData.noOfPerson}
        </div>
        <div className="border d-flex justify-content-between py-3 py-3 px-2">
          <span className="fw-bold">Price per head</span>
          {bookingData.package.pricePerHead}
        </div>

        <div className="border d-flex justify-content-between py-3 py-3 px-2">
          <span></span>
          <h4 className="text-success mt-5">Total Amount</h4>
          <div className="p-3">
            <div className="d-flex">
              <div className="d-flex w-100 justify-content-between">
                <p></p>
                <p>
                  <span style={{ fontFamily: " 'Montserrat', sans-serif" }}>
                    ₹
                  </span>
                  {bookingData.package.pricePerHead} x{" "}
                  <span style={{ fontFamily: " 'Montserrat', sans-serif" }}>
                    ₹
                  </span>
                  {bookingData.noOfPerson}
                </p>
              </div>
              {/* <p style={{ width: "70px", textAlign: "right" }}>$100</p> */}
            </div>
            <hr />
            <h4 className="text-danger" style={{ textAlign: "right" }}>
              <span style={{ fontFamily: " 'Montserrat', sans-serif" }}>₹</span>
              {bookingData.amount}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
