import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";

const Orders = () => {
  const [orderData, setOrderData] = useState([]);
  const token = Cookies.get("jwtToken");
  useEffect(async () => {
    const respose = await axios.get(
      `${import.meta.env.VITE_APP_URL}/api/Order/userorders`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(respose.data,"responseData");
    setOrderData(respose.data);
    console.log(orderData,"orderData");
  }, []);
  return (
    <div>
      {orderData.map((order) => {
        return (
          <>
            <CardGroup>
      <Card>
        <Card.Img variant="top" src={`${import.meta.env.VITE_APP_URL}/Image/${order.booking.package.image1}`} />
        <Card.Body>
          <Card.Title>Order Id: {order.id}</Card.Title>
          <Card.Text>
             
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
          </>
        );
      })}
    </div>
  );
};

export default Orders;
