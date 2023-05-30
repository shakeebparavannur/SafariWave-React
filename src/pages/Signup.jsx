import React from "react";
import { Form } from "react-bootstrap";
import InputField from "../components/InputField";
import { useFormik } from "formik";
import InputSelect from "../components/InputSelect";


const Signup = () => {
  const statesInIndia = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];
  const formik = useFormik({
    initialValues:{
        username
    }
  })

  return (
    <div>
      <Form>
      <h3>SigUp</h3>
      <InputField
        id="username"
        label="please choose your username"
        variant="outlined"
        type="text"
      />
      <InputField
        id="fullName"
        label="Enter Your Fullname"
        variant="outlined"
        type="text"
      />
      <InputField
        id="email"
        label="Enter Your Email"
        variant="outlined"
        type="email"
      />
      <InputField
        id="phonenumber"
        label="Enter your Phone number"
        variant="outlined"
        type="tel"
      />
      <InputField
        id="address"
        label="Enter your Address"
        variant="outlined"
        as="textarea"
        row={3}
        type="text"
      />
      <InputField
        id="pincode"
        label="Enter your Postal Code"
        variant="outlined"
        type="number"
      />
      <InputSelect selectTitle = "Choose the state" label="Type of Package" id="typeOfPackage" options={statesInIndia} title="Type of Package" name="Type" />
      <InputField
        id="password"
        label="Enter Password"
        variant="outlined"
        type="password"
      />
       <InputField
        id="confpassword"
        label="Confirm Password"
        variant="outlined"
        type="password"
      />

      </Form>
    </div>
  );
};

export default Signup;