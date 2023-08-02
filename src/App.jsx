import { createContext, useState } from "react";
import Login from "./pages/Login";
import "./App.css";
import Home from "./pages/Home";
import Packages from "./components/Packages";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddPackage from "./Admin/pages/AddPackage";
import Signup from "./pages/Signup";
import PackageDetails from "./pages/PackageDetails";
import Navbar from "./components/Navbar";
import Services from "./pages/Services";
import AdminLogin from "./Admin/pages/AdminLogin";
import AdminHome from "./Admin/pages/AdminHome";
import ConfirmBooking from "./pages/ConfirmBooking";
import Payment from "./pages/Payment";
import { ToastContainer } from "react-toastify";
import ProceedPayment from "./pages/ProceedPayment";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";

export const userContext = createContext();
function App() {
  // const location = useLocation();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/signup";
  return (
    <>
      <BrowserRouter>
        <userContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
          <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="adminLogin" element={<AdminLogin />} />
          <Route path="adminhome" element={<AdminHome />} />
            <Route  element={<Navbar />} >
            <Route path="/" element={<Home />} />
            <Route path="package" element={<Packages />} />
            <Route path="addPackage" element={<AddPackage />} />
            <Route path="Services" element={<Services />} />
            <Route path="admin" element={<AdminLogin />} />
            
            <Route path="confirmBooking/:packId" element={<ConfirmBooking />} />
            <Route path="productdetails/:id" element={<PackageDetails />} />
            <Route path="payment/:bookingId" element={<Payment />} />
            <Route path="initpayment/:bookingId" element={<ProceedPayment />} />
            <Route path="orders" element={<Orders />} />
            <Route path="order/:orderId" element={<OrderDetails />} />
            </Route>
          </Routes>
        </userContext.Provider>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </BrowserRouter>
    </>
  );
}

export default App;
