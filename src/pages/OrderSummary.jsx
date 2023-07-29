import React from 'react'

const OrderSummary = ({bookingData}) => {
    console.log(bookingData);
  return (
    <div>
        {""}
        <h3 className='text-success'>Booking Summary</h3>
        <div className="mt-3">
            <div className="border py-3 px-2"> Username:{bookingData.userId} </div>
            <div className="border py-3 px-2">Date:{bookingData.dateOfTrip}</div>
            <div className="border py-3 px-2">No of Person:{bookingData.noOfPerson}</div>
            <div className="border py-3 px-2">Price per head{bookingData.noOfPerson}</div>
            <div className="border py-3 px-2">
                <h4 className='text-success'>Menu Item</h4>
                <div className="p-3">
                    <div className="d-flex">
                        <div className='d-flex w-100 justify-content-between'>
                            <p>Menu Item Name</p>
                            <p>$10 x 10 = </p>
                        </div>
                        <p style={{width:"70px",textAlign:"right"}}>$100</p>
                    </div>
                    <hr />
                    <h4 className="text-danger" style={{textAlign:"right"}}>$100</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderSummary